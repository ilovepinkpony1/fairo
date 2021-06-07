import { data, labelsAfterGame } from './data.js'

window.addEventListener('load', () => {
  let question = 0
  let time = 25
  let money = 25
  let nerves = 25

  let lastResults = []

  const welcomePageButton = document.querySelector(
    '#gameId .welcomePage button'
  )
  const welcomePage = document.querySelector('#gameId .welcomePage')
  const rightsPage = document.querySelector('#gameId .rightsPage')
  const rightsPageButton = document.querySelector('#gameId .rightsPage button')
  const gamePage = document.querySelector('#gameId .gamePage')
  const gamePageQuestion = document.querySelector('#gameId .gamePage .question')
  const resultButton = document.querySelector('#gameId .resultPage button')
  const resultWrapper = document.querySelector('#gameId .resultPage')
  const resultImage = document.querySelector('#gameId .resultPage .heroBg')
  const prevQuestionButton = document.querySelector('#gameId .prevQuestion')
  const gamePageAnswersWrapper = document.querySelector(
    '#gameId .gamePage .answersWrapper'
  )
  const timeItem = document.querySelector('#gameId .gamePage .time span')
  const moneyItem = document.querySelector('#gameId .gamePage .money span')
  const nervesItem = document.querySelector('#gameId .gamePage .nerves span')

  const modalTimeItem = document.querySelector('#gameId .modalBg .time span')
  const modalMoneyItem = document.querySelector('#gameId .modalBg .money span')
  const modalNervesItem = document.querySelector(
    '#gameId .modalBg .nerves span'
  )
  const gameImage = document.querySelector(
    '#gameId .gamePage .imageWrapper img'
  )
  const modalWrapper = document.querySelector('#gameId .modalBg')
  const modalButton = document.querySelector('#gameId .modalBg button')

  welcomePageButton.addEventListener('click', () => {
    rightsPage.classList.add('rightsPageVisible')
    welcomePage.classList.add('welcomePageHidden')
  })

  prevQuestionButton.addEventListener('click', () => {
    question -= 1
    if (question === 0) {
      prevQuestionButton.classList.remove('prevQuestionVisible')
    }
    lastResults[lastResults.length - 1].forEach((item) => {
      switch (item) {
        case 'money':
          money += 5
          break
        case 'time':
          time += 5
          break
        case 'nerves':
          nerves += 5
          break
      }
    })

    lastResults.pop()

    timeItem.innerText = time
    moneyItem.innerText = money
    nervesItem.innerText = nerves
    initQuestions()
  })

  rightsPageButton.addEventListener('click', () => {
    gamePage.classList.add('gamePageVisible')
    rightsPage.classList.add('rightsPageHidden')
    document.querySelector('#gameId .bgImage').style.display = 'none'
    document.querySelector('#gameId').style.overflow = 'visible'
  })

  resultButton.addEventListener('click', () => {
    question = 0
    time = 30
    money = 30
    nerves = 30
    resultWrapper.classList.remove('resultPageVisible')
    prevQuestionButton.classList.remove('prevQuestionVisible')
    gamePage.classList.add('gamePageVisible')
    timeItem.innerText = 30
    moneyItem.innerText = 30
    nervesItem.innerText = 30
    gamePageQuestion.setAttribute(
      'data-currentQuestion',
      `${question + 1} / ${data.length}`
    )
    initQuestions()
  })

  modalButton.addEventListener('click', () => {
    modalMoneyItem.classList.remove('reducedScore')
    modalMoneyItem.innerText = '0'
    modalNervesItem.classList.remove('reducedScore')
    modalNervesItem.innerText = '0'
    modalTimeItem.classList.remove('reducedScore')
    modalTimeItem.innerText = '0'

    toggleModalVisible()
    initQuestions()
  })

  const onAnswer = (result) => {
    lastResults.push(result)
    result.forEach((res) => {
      switch (res) {
        case 'money':
          money -= 5
          break
        case 'time':
          time -= 5
          break
        case 'nerves':
          nerves -= 5
          break
      }
    })
    if (question === data.length - 1 || money <= 0 || time <= 0 || nerves <= 0) {
      onGameEnd()
    } else {
      showQuote(result)
    }
    timeItem.innerText = time
    moneyItem.innerText = money
    nervesItem.innerText = nerves

    if (!prevQuestionButton.classList.contains('prevQuestionVisible')) {
      prevQuestionButton.classList.add('prevQuestionVisible')
    }
  }

  const initQuestions = () => {
    gamePageQuestion.setAttribute(
      'data-currentQuestion',
      `${question + 1} / ${data.length}`
    )
    gameImage.setAttribute('src', `./assets/q${question + 1}.png`)
    gamePageQuestion.innerText = data[question].question
    timeItem.innerText = time
    moneyItem.innerText = money
    nervesItem.innerText = nerves
    gamePageAnswersWrapper.innerHTML = ''
    data[question].answers.forEach((item) => {
      const el = document.createElement('span')
      el.addEventListener('click', () => {
        onAnswer(item.result)
      })

      el.innerText = item.text
      gamePageAnswersWrapper.appendChild(el)
    })
  }

  const toggleModalVisible = () => {
    modalWrapper.classList.toggle('modalBgVisible')
  }

  const onGameEnd = () => {
    resultButton.innerText = 'Грати ще'
    const resultText = document.querySelector('#gameId .resultPage h2')

    if (money <= 0 || time <= 0 || nerves <= 0) {
      resultText.innerText = 'Невдача! Ви не змогли пробалансувати між часом, грошима та нервами.'
      resultButton.innerText = 'Почати заново'
      resultImage.setAttribute('src', './assets/looserBg.png')
    } else if (money >= nerves && money >= time) {
      resultText.innerText = labelsAfterGame[0]
      resultImage.setAttribute('src', './assets/moneyBg.png')
    } else if (nerves >= money && nerves >= time) {
      resultText.innerText = labelsAfterGame[1]
      resultImage.setAttribute('src', './assets/nervesBg.png')
    } else {
      resultText.innerText = labelsAfterGame[2]
      resultImage.setAttribute('src', './assets/timeBg.png')
    }

    document.querySelector('#gameId .bgImage').style.display = 'block'
    document.querySelector('#gameId').style.overflow = 'hidden'

    resultWrapper.classList.add('resultPageVisible')
    gamePage.classList.remove('gamePageVisible')
  }

  const showQuote = (answeredItems) => {
    const text = document.querySelector('#gameId .quoteWrapper p')
    modalButton.innerText = 'далі'

    answeredItems.forEach((item) => {
      switch (item) {
        case 'time': {
          modalTimeItem.classList.add('reducedScore')
          modalTimeItem.innerText = '-5'
          break
        }

        case 'money': {
          modalMoneyItem.classList.add('reducedScore')
          modalMoneyItem.innerText = '-5'
          break
        }

        case 'nerves': {
          modalNervesItem.classList.add('reducedScore')
          modalNervesItem.innerText = '-5'
          break
        }
      }
    })

    toggleModalVisible()
    text.innerText = data[question].quote
    question += 1
  }

  initQuestions()
})
