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
        "images/james-bond.jpg",
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
      question: 'What cocktail gets Jeff through the rollercoaster storyline of the Big Lebowski?',
      answers: [
        'Bull Shot',
        'Charlie Chaplin',
        'White Russian',
        'Long Island Iced Tea'
      ],
      imageAttributes: [
        "images/big-lebowski-white-russian.jpg",
        "Big Lebowski"
      ],
      correctAnswer: 'White Russian',
      correct: 'Definitely!',
      incorrect: 'Oof, close but no cigar. Jeff lived on White Russians.'
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
    <div class="group no-margin-top">
      <div class="item">
        <p class="center"><img src="images/clean-cocktail-lineup.jpg" alt="A Colorful Row of Cocktails"></p>
        <h2 class="center">It's Happy Hour!</h2>
        <p class="center">Test your cocktail trivia knowledge!</p>
        <button class="js-start start-button">Start</button>
      </div>
    </div>
  </div>`;
}

function generateQuestionPage() {
  if (STORE.questionCompleted) {
    return `
    <div class="wrapper">
      <section class="group no-margin-top">
        <article class="item">
          <h2 class="">Question Number ${STORE.questionNumber} of 5: ${STORE.questions[STORE.questionNumber-1].question}</h2>
          <p class="">Current Score: ${STORE.score} of 5</p>
          <p class="center"><img src=${STORE.questions[STORE.questionNumber-1].imageAttributes[0]} alt=${STORE.questions[STORE.questionNumber-1].imageAttributes[1]}></p>
          <p class="">${STORE.feedback}</p>
          <button class="js-next-question">Next question!</button>
        </article>
      </section>
    </div>`;
  }

  return `
  <div class="wrapper">
    <section class="group no-margin-top">
      <article class="item">
        <h2 class="">Question Number ${STORE.questionNumber} of 5: ${STORE.questions[STORE.questionNumber-1].question}</h2>
        <p class="">Current Score: ${STORE.score} of 5</p>
        <p class="center"><img src=${STORE.questions[STORE.questionNumber-1].imageAttributes[0]} alt=${STORE.questions[STORE.questionNumber-1].imageAttributes[1]}></p>
        <form>
          <div class="radio-button">
            <input type="radio" id="1" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[0]}" required>
            <label for="1">${STORE.questions[STORE.questionNumber-1].answers[0]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" id="2" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[1]}">
            <label for="2">${STORE.questions[STORE.questionNumber-1].answers[1]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" id="3" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[2]}">
            <label for="3">${STORE.questions[STORE.questionNumber-1].answers[2]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" id="4" name="answer" value="${STORE.questions[STORE.questionNumber-1].answers[3]}">
            <label for="4">${STORE.questions[STORE.questionNumber-1].answers[3]}</label>
          </div>
          <div>
          ${STORE.questionCompleted ? "" : '<button type="submit">Check your answer!</button>'}
          </div>
        </form>
      </article>
  </div>`;
};



function generateEndPage() {
  return `
  <div class="wrapper">
  <section class="group">
    <div class="item">
      <h2 class="">You scored ${STORE.score} out of ${STORE.questions.length}!</h2>
      <p class="center"><img src="images/tenor.gif" alt="A very happy lady with cocktails."></p>
      <p class="">${STORE.score == STORE.questions.length ? "Great job! Although it's a little suspicious that you got a perfect score." : "Better luck next time!"}</p>
      <button class="js-restart start-button">Click to restart</button>
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
  $('main').on('click', '.js-start', event => {
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