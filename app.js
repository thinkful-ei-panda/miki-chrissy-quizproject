'use strict'

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green',
      correct: 'You are absolutely right!',
      incorrect: 'Ooops!'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  feedback: "",
  questionCompleted: false,
  questionNumber: 0,
  quizStarted: false,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateQuizAppPage(item) {
  console.log('generateQuizAppPage ran!');
  if (item.quizStarted === false) {
    console.log('I returned start!')
    return generateStartPage();
  } else if (item.quizStarted === true && item.questionNumber < item.questions.length+1) {
    console.log('I returned question!')
    return generateQuestionPage();
  } else { 
    console.log('I returned end!')
    return generateEndPage();
  }
}

function generateStartPage() {
  console.log('generateStartPage ran!');
  return `
  <div class="wrapper">
  <section class="group">
    <h2 class="item-end">h2: Some Text</h2>
    <p class="item-end">p: Some Text</p>
    <div class="item-double padding">
      <h3 class="center">h3: Welcome</h3>
      <p>p: Teeeeeeeeeext</p>
    </div>
    <div class="item-double center padding">
      <button class="js-next-page">Next</button>
    </div>
  </section>
</div>`;
}

function generateQuestionPage() {
  console.log('generateQuestionPage ran!')
  return `
  <div class="wrapper">
    <section class="group">
      <h2 class="item-end">Question Number: ${STORE.questionNumber} of 5</h2>
      <p class="item-end">Current Score: ${STORE.score} of 5</p>
      <article class="item-double">
        <h3 class="center">${STORE.questions[STORE.questionNumber-1].question}</h3>
        <form class="padding">
          <div>
            <input type="radio" id="1" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[0]}" required>
            <label for="1">${STORE.questions[STORE.questionNumber-1].answers[0]}</label>
          </div>
          <div>
            <input type="radio" id="2" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[1]}">
            <label for="2">${STORE.questions[STORE.questionNumber-1].answers[1]}</label>
            </div>
          <div>
            <input type="radio" id="3" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[2]}">
            <label for="3">${STORE.questions[STORE.questionNumber-1].answers[2]}</label>
          </div>
          <div>
            <input type="radio" id="4" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[3]}">
            <label for="4">${STORE.questions[STORE.questionNumber-1].answers[3]}</label>
          </div>
          <div>
            ${STORE.questionCompleted? "" : '<button type="submit">Check your answer!</button>'}
          </div>
        </form>
      </article>
      <div class="center item-double padding">
        <p class="feedback">${STORE.feedback}</p>
        ${STORE.questionCompleted ? '<button class="js-next-question">Next</button>' : "" }
      </div>
    </section>
  </div>`;
}

function generateEndPage() {
  console.log('generateEndPage ran!')
  return `
  <div class="wrapper">
  <section class="group">
    <h2 class="item-end">h2: Some Text</h2>
    <p class="item-end">p: Some Text</p>
    <div class="item-double padding">
      <h3 class="center">h3: Goodbye</h3>
      <p>p: Thaaaaaaaaaanks</p>
    </div>
    <div class="item-double padding">
      <button class="js-restart">Take quiz again!</button>
    </div>
  </section>
</div>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizApp() {
  console.log('renderQuizApp ran!');
  const MAINCONTENT = generateQuizAppPage(STORE); //someFunction stands in for the template generator
  $('main').html(MAINCONTENT);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function goToNextPage() {
  console.log('goToNextPage ran!')
  $('button.js-next-page').click(event => {
    STORE.quizStarted = true;
    STORE.questionNumber += 1;
    renderQuizApp();
  });   
}

function submitUserAnswer() {
  $('main').on('submit', event => {
    event.preventDefault();
    console.log('submitAnswer ran!')
    const USERANSWER = $(':checked').val();
    const FEEDBACK = checkUserAnswer(USERANSWER);
    renderQuizApp();
  });
}

function checkUserAnswer(userAnswer) {
  console.log('checkUserAnswer ran!');
  if (userAnswer == STORE.questions[STORE.questionNumber-1].correctAnswer) {
    STORE.score += 1;
    STORE.feedback = STORE.questions[STORE.questionNumber-1].correct;
    STORE.questionCompleted = true;
  } else {
    STORE.feedback = STORE.questions[STORE.questionNumber-1].incorrect;
    STORE.questionCompleted = true;
  }
}

function goToNextQuestion() {
  console.log('goToNextQuestion ran!')
  $('main').on('click', '.js-next-question', event => {
    STORE.feedback = "";
    STORE.questionCompleted = false;
    STORE.questionNumber += 1;
    renderQuizApp();
  });   
}

function resetQuiz() {
  console.log('goToStartPage ran!')
  $('main').on('click', '.js-restart', event => {
    STORE.feedback = "";
    STORE.questionCompleted = false;
    STORE.questionNumber = 0;
    STORE.quizStarted = false;
    STORE.score = 0;
    renderQuizApp();
  });  
}

/* PSEUDO CODING */

// // Rendering -- 
// Start page is the default stage, basic welcome message and start button. Listening for one event, onClick for the StartMission button, which moves to question 1.
// Question page, listening for a onSubmit button which moves to the next question and records answer, checking against correct answer, to update score.

function quizAppFunctions() {
  renderQuizApp();
  goToNextPage();
  submitUserAnswer();
  goToNextQuestion();
  resetQuiz();
}

$(quizAppFunctions);