export const data = [
  {
    question:
      'О 16:30 бухгалтер вашого клієнта раптово повідомляє, що йде у відпустку з наступного дня, бо вдалося вхопити гарячу путівку. У вас є шанс виставити рахунок за свої послуги сьогодні або вже за 10 робочих днів. Що робитимете?',
    answers: [
      {
        text: 'Не хочу сидіти без грошей ще 10 днів. Розгорну Excel-імперію прямо на колінах і встигну надіслати. Це ж доволі просто.',
        result: ['time', 'nerves'],
      },
      {
        text: 'Чого тут нервувати? У мене завжди є гроші про запас, а клієнт нікуди не втече, адже ми давно співпрацюємо. Краще побажаю бухгалтеру гарного відпочинку.',
        result: ['money'],
      },
      {
        text: 'Оке-е-ей, закрию Tik-Tok на декілька хвилин і створю рахунок в застосунку. ',
        result: [],
      },
    ],
    quote:
      'До речі, Fairo запам’ятовує дані клієнта й автоматично заповнює їх під час створення наступних рахунків. ',
  },
  {
    question:
      'Ви працюєте над величезним проєктом для компанії з Великої Британії. Ваш клієнт не знає української та хоче рахунок із сумою у фунтах. Що робитимете?',
    answers: [
      {
        text: 'Товариш тільки-но повернувся із заробітків із Лондона, він допоможе. Поки що подивлюся, що там із курсом.',
        result: ['time', 'nerves'],
      },
      {
        text: 'Оскільки проєкт великий — потрібен професійний підхід. Знайду першокласного перекладача з досвідом у юридичних питаннях, аби кожне слово відповідало правилам. Не хочу стати героєм вислову «скупий платить двічі».',
        result: ['money'],
      },
      {
        text: 'Сам(а) легко створюю рахунки у гривні. Думаю, з фунтами проблем не буде.',
        result: ['time', 'nerves'],
      },
    ],
    quote:
      'Рахунки у Fairo можна створювати трьома мовами та в понад 40 валютах.',
  },
  {
    question:
      'Усі друзі-фрилансери заметушилися й обговорюють якісь дедлайни подання податкових звітів. Як точно з’ясувати, що та коли треба подавати?',
    answers: [
      {
        text: 'Порадитися з тими самими друзями. Одна голова добре, а декілька — краще. Ще й лайфхаків можна наслухатися. У крайньому разі заплачу комусь за консультацію.',
        result: ['time', 'money'],
      },
      {
        text: 'Можна загуглити та звіритися на сайті Державної податкової служби України. Відчую себе бумером.',
        result: ['time', 'nerves'],
      },
      {
        text: 'Я майстер планування. У мене є додатки, які нагадують про курс вітамінів, початок ретроградного Меркурія та вихід нових сезонів улюблених серіалів. Про податки точно якийсь нагадає.',
        result: ['time'],
      },
    ],
    quote:
      'Fairo нагадує про періоди подання податкових звітів. Перші два місяці користування застосунком безоплатні.',
  },
  {
    question:
      'Біткоїн нещодавно сильно впав, і вам здається, що ось-ось він удвічі здорожчає. Дуже хочеться вкластися, поки є можливість, але потрібно залишити гроші на сплату податків. Як будете рахувати, скільки грошей відкласти?',
    answers: [
      {
        text: 'Сяду ввечері на кілька годин за ноутбук і розв’яжу це питання. Працювати з числами та документами завжди зручніше у спокої та з десктопу. Ще й улюблений серіал на фоні послухаю.',
        result: ['time', 'nerves'],
      },
      {
        text: 'Податки — справа відповідальна, тож попрошу допомоги у свого давнього товариша, він наче бухгалтер.',
        result: ['money'],
      },
      {
        text: 'Я вже знаю, скільки заплачу! У моєму особистому кабінеті все давно підраховано.',
        result: [],
      },
    ],
    quote:
      'Із Fairo сума податку ніколи не стане сюрпризом наприкінці періоду, адже додаток підраховує та зображає її в реальному часі. Також користувач може «відкласти» кошти на своєму бізнес-рахунку.',
  },
  {
    question:
      'Літо йде повним ходом — у брата весілля, море тепле, а відпочинок на природі заворожує. Тим часом податки нікуди не зникли — їх однаково потрібно сплачувати. Як ви це зробите?',
    answers: [
      {
        text: 'Які податки? У мене тут свято. Я дотримуюся правила «Живемо лише один раз». Краще потім сплачу штраф, ніж буду розбиратися з цим зараз.',
        result: ['money'],
      },
      {
        text: 'Хочеш зробити добре — зроби сам. Це не так довго, як здається. Краще цілувати жирну сковорідку на другий день весілля, ніж платити зайві гроші абикуди.',
        result: ['time', 'nerves'],
      },
      {
        text: 'Здогадувався, що так буде, тому заздалегідь автоматизував цей процес у смартфоні.',
        result: [],
      },
    ],
    quote:
      'Нещодавно Fairo додав можливість сплачувати податки за один клік та оплачувати рахунки в застосунку. Банківські функції Fairo працюють за підтримки Raiffeisen Bank Aval (RBI).',
  },
  {
    question:
      'Так сталося, що ви були в шаленій відпустці та не встигли сплатити податки. Яка ж там заборгованість?',
    answers: [
      {
        text: 'Дідько! Мабуть, там пеня та штрафні платежі. Потрібно сходити в податкову, щоб остаточно все вирішити.',
        result: ['money', 'time', 'nerves'],
      },
      {
        text: 'Спокійно розв’яжу проблему — почитаю в інтернеті, які бувають штрафи та пеня. А наступного дня і сплачу. Без паніки, панове, без паніки.',
        result: ['time', 'money'],
      },
      {
        text: 'Довірюся технологіям. Я вже отримував пуш-повідомлення про нараховану заборгованість, просто перевірю в додатку.',
        result: ['money'],
      },
    ],
    quote:
      'Fairo автоматично розраховує податкову заборгованість ФОПів 3-ї групи за кожним бухгалтерським записом.',
    rightAnswerIndex: 0,
  },
]

export const labelsAfterGame = [
  'Ого, тобі вдалося зберегти купу грошей. Роби так і далі й купиш мамі білий кабріолет вже до Нового року!',
  'Твої нерви залишилися на місці. Клич друзів на «Дженгу» — нервів вистачить на декілька годин гри. ',
  'Нам би так швидко розв’язувати проблеми, як це вдалося тобі. З такою кількістю зекономленого часу можна навіть виспатися чи постояти в заторах. ',
]
