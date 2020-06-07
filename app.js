'use strict'

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is Archer\'s drink of choice?',
      answers: [
        'Cosmopolitan',
        'Manhattan',
        'Bloody Mary',
        'Negroni'
      ],
      correctAnswer: 'Bloody Mary',
      correct: 'Yup, and the cumulative hangover will kill him.',
      incorrect: 'Not quite! Archer lives on Bloody Marys.'
    },
    {
      question: 'What is the key ingredient in a Sex on the Beach?',
      answers: [
        'Cherry Grenadine',
        'Peach Schnapps',
        'Rum',
        'Sweet Vermouth'
      ],
      correctAnswer: 'Peach Schnapps',
      correct: 'You got it!',
      incorrect: 'Sorry, but peach schnapps is the foundation of a good Sex on the Beach.'
    },
    {
      question: 'How does 007 like his vodka martinis?',
      answers: [
        'Shaken, not stirred.',
        'On the rocks.',
        'Dirty.',
        'With a twist.'
      ],
      correctAnswer: 'Shaken, not stirred.',
      correct: 'Correct - old fashioned, isn\'t it?',
      incorrect: 'Nope! He liked them shaken, not stirred.'
    },{
      question: 'What famous cocktail has only two ingredients?',
      answers: [
        'White Lady.',
        'Southside.',
        'Gin and Tonic.',
        'Americano.'
      ],
      correctAnswer: 'Gin and Tonic.',
      correct: 'Kind of obvious, huh?',
      incorrect: 'Sorry, but the answer was Gin and Tonic.'
    }
  ],
  feedback: '',
  quizStarted: false,
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
    <h2 class="item-end">h2</h2>
    <p class="item-end">p</p>
    <div class="item-double padding">
      <h3 class="center">h3</h3>
      <p>p</p>
    </div>
    <div class="item-double center padding">
      <button class="js-next-page">Next</button>
    </div>
  </section>
</div>`;
}

function generateQuestionPage() {
  console.log('generateQuestionPage ran!')
  if (STORE.questionCompleted) {
    return `
    <div class="wrapper">
      <section class="group">
        <h2 class="item-end">Question Number: ${STORE.questionNumber} of 5</h2>
        <p class="item-end">Current Score: ${STORE.score} of 5</p>
        <div class="center item-double padding">
          <p class="feedback">${STORE.feedback}</p>
          ${STORE.questionCompleted ? '<button class="js-next-question">Next question!</button>' : ""}
        </div>
      </section>
    </div>`;
  }
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
            ${STORE.questionCompleted ? "" : '<button type="submit">Check your answer!</button>'}
          </div>
        </form>
      </article>
    </section>
  </div>`;
}



function generateEndPage() {
  console.log('generateEndPage ran!')
  return `
  <div class="wrapper">
  <section class="group">
    <h2 class="item-end">h2</h2>
    <p class="item-end">p</p>
    <div class="item-double padding">
      <h3 class="center">h3</h3>
      <p>p</p>
    </div>
    <div class="item-double center padding">
      <button class="js-restart">Try again</button>
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
    STORE.previousScore = STORE.currentScore;
    renderQuizApp();
  });   
}

function submitUserAnswer() {
  $('main').on('submit', event => {
    event.preventDefault();
    console.log('submitAnswer ran!')
    const USERANSWER = $(':checked').val();
    checkUserAnswer(USERANSWER);
    renderQuizApp();
  });
}

function checkUserAnswer(userAnswer) {
  console.log('checkUserAnswer ran!');
  if (userAnswer === STORE.questions[STORE.questionNumber-1].correctAnswer) {
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