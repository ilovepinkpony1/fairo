import { data, labelsAfterGame } from './data.js'

window.addEventListener('load', () => {
  let question = 0
  let time = 25
  let money = 25
  let nerves = 25

  let lastResults = []

  const welcomePageButton = document.querySelector(
    '#fairoVectorSPecProject .welcomePage button'
  )
  const welcomePage = document.querySelector('#fairoVectorSPecProject .welcomePage')
  const rightsPage = document.querySelector('#fairoVectorSPecProject .rightsPage')
  const rightsPageButton = document.querySelector('#fairoVectorSPecProject .rightsPage button')
  const gamePage = document.querySelector('#fairoVectorSPecProject .gamePage')
  const gamePageQuestion = document.querySelector('#fairoVectorSPecProject .gamePage .question')
  const resultButton = document.querySelector('#fairoVectorSPecProject .resultPage button')
  const resultWrapper = document.querySelector('#fairoVectorSPecProject .resultPage')
  const resultImage = document.querySelector('#fairoVectorSPecProject .resultPage .heroBg')
  const prevQuestionButton = document.querySelector('#fairoVectorSPecProject .prevQuestion')
  const gamePageAnswersWrapper = document.querySelector(
    '#fairoVectorSPecProject .gamePage .answersWrapper'
  )
  const timeItem = document.querySelector('#fairoVectorSPecProject .gamePage .time span')
  const moneyItem = document.querySelector('#fairoVectorSPecProject .gamePage .money span')
  const nervesItem = document.querySelector('#fairoVectorSPecProject .gamePage .nerves span')

  const modalTimeItem = document.querySelector('#fairoVectorSPecProject .modalBg .time span')
  const modalMoneyItem = document.querySelector('#fairoVectorSPecProject .modalBg .money span')
  const modalNervesItem = document.querySelector(
    '#fairoVectorSPecProject .modalBg .nerves span'
  )
  const gameImage = document.querySelector(
    '#fairoVectorSPecProject .gamePage .imageWrapper img'
  )
  const modalWrapper = document.querySelector('#fairoVectorSPecProject .modalBg')
  const modalButton = document.querySelector('#fairoVectorSPecProject .modalBg button')

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
    document.querySelector('#fairoVectorSPecProject .bgImage').style.display = 'none'
    document.querySelector('#fairoVectorSPecProject').style.overflow = 'visible'
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

  const onAnswer = (result, quote) => {
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
      showQuote(result, quote)
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
      const el = document.createElement('div')
      const text = document.createElement('p')
      text.innerText = item.text
      el.appendChild(text)
      const arr = new Array(24).fill(null)

      arr.forEach(() => {
        const innerEl = document.createElement('span')
        el.appendChild(innerEl)
      })

      el.addEventListener('click', () => {
        onAnswer(item.result, item.quote)
      })

      gamePageAnswersWrapper.appendChild(el)
    })
  }

  const toggleModalVisible = () => {
    modalWrapper.classList.toggle('modalBgVisible')
  }

  const onGameEnd = () => {
    resultButton.innerText = 'Грати ще'
    const resultText = document.querySelector('#fairoVectorSPecProject .resultPage h2')

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

    document.querySelector('#fairoVectorSPecProject .bgImage').style.display = 'block'
    document.querySelector('#fairoVectorSPecProject').style.overflow = 'hidden'

    resultWrapper.classList.add('resultPageVisible')
    gamePage.classList.remove('gamePageVisible')
  }

  const showQuote = (answeredItems, quote) => {
    const text = document.querySelector('#fairoVectorSPecProject .quoteWrapper p')
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
    text.innerText = quote
    question += 1
  }

  initQuestions()
})
