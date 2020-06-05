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
      imageAttributes: [
        "images/archer_bloody_mary.jpg",
        "Archer's Bloody Mary'"
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
      imageAttributes: [
        "images/sex-on-the-beach.jpg",
        "Sex on the Beach"
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
      imageAttributes: [
        "images/",
        "Shaken, Not Stirred"
      ],
      correctAnswer: 'Shaken, not stirred.',
      correct: 'Correct - old fashioned, isn\'t it?',
      incorrect: 'Nope! He liked them shaken, not stirred.'
    },
    {
      question: 'What famous cocktail has only two ingredients?',
      answers: [
        'White Lady.',
        'Southside.',
        'Gin and Tonic.',
        'Americano.'
      ],
      imageAttributes: [
        "images/gin-and-tonic.jpg",
        "Gin and Tonic"
      ],
      correctAnswer: 'Gin and Tonic.',
      correct: 'Kind of obvious, huh?',
      incorrect: 'Sorry, but the answer was Gin and Tonic.'
    },
    {
      question: 'What is the key ingredient in a Sex on the Beach?',
      answers: [
        'Cherry Grenadine',
        'Peach Schnapps',
        'Rum',
        'Sweet Vermouth'
      ],
      imageAttributes: [
        "images/sex-on-the-beach.jpg",
        "Sex on the Beach"
      ],
      correctAnswer: 'Peach Schnapps',
      correct: 'You got it!',
      incorrect: 'Sorry, but peach schnapps is the foundation of a good Sex on the Beach.'
    },
  ],
  feedback: '',
  quizStarted: false,
  questionCompleted: false,
  questionNumber: 0,
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
  if (item.quizStarted === false) {
    return generateStartPage();
  }
    else if (item.quizStarted === true && item.questionNumber < item.questions.length+1) {
    return generateQuestionPage();
    }   
      else { 
      return generateEndPage();
      }
}

function generateStartPage() {
  return `
  <div class="wrapper">
  <div class="group">
    <img class=center src="images/clean-cocktail-lineup.jpg" alt="A colorful row of cocktails.">
    <div class="item-double padding">
      <h3 class="center">h3: Welcome</h3>
      <p>p: Text</p>
    </div>
    <div class="item-double center padding">
      <button class="js-next-page">Next</button>
    </div>
  </div>
</div>`;
}

function generateQuestionPage() {
  return `
  <div class="wrapper">
    <section class="group">
      <h2 class="item-end">Question Number: ${STORE.questionNumber} of 5</h2>
      <p class="item-end">Current Score: ${STORE.score} of 5</p>
      <article class="item-double">
        <p class="center"><img src=${STORE.questions[STORE.questionNumber-1].imageAttributes[0]} alt=${STORE.questions[STORE.questionNumber-1].imageAttributes[1]}></p>
        <h3 class="center">${STORE.questions[STORE.questionNumber-1].question}</h3>
        <form class="padding item-start">
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
      <div class="center item-double padding">
        <p class="feedback">${STORE.feedback}</p>
        ${STORE.questionCompleted ? '<button class="js-next-question">Next question!</button>' : ""}
      </div>
    </section>
  </div>`;
}



function generateEndPage() {
  return `
  <div class="wrapper">
  <section class="group">
    <h2 class="item-end">h2: Some Text</h2>
    <p class="item-end">p: Some Text</p>
    <div class="item-double padding">
      <h3 class="center">You scored ${STORE.score} out of ${STORE.questions.length}!</h3>
      <p>${STORE.score == STORE.questions.length ? "Nice!" : "Better luck next time!"}</p>
    </div>
    <div class="center item-double padding">
      <button class="js-restart">Take quiz again!</button>
    </div>
  </section>
</div>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizApp() {
  const MAINCONTENT = generateQuizAppPage(STORE); //someFunction stands in for the template generator
  $('main').html(MAINCONTENT);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function goToNextPage() {
  $('main').on('click', '.js-next-page', event => {
    STORE.quizStarted = true;
    STORE.questionNumber += 1;
    STORE.previousScore = STORE.currentScore;
    renderQuizApp();
  });   
}

function submitUserAnswer() {
  $('main').on('submit', event => {
    event.preventDefault();
    const USERANSWER = $(':checked').val();
    checkUserAnswer(USERANSWER);
    renderQuizApp();
  });
}

function checkUserAnswer(userAnswer) {
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
  $('main').on('click', '.js-next-question', event => {
    STORE.feedback = "";
    STORE.questionCompleted = false;
    STORE.questionNumber += 1;
    renderQuizApp();
  });   
}

function resetQuiz() {
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