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
      correctAnswer: 'green'
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
  quizStarted: false,
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


function someFunction(item) {
  console.log('someFunction ran!');
  if (item.quizStarted === false) {
    console.log('I returned start!')
    return renderStartPage();
  } else if (item.quizStarted === true && item.questionNumber < 6) {
    console.log('I returned question!')
    return renderQuestionPage();
  } else { 
    console.log('I returned end!')
    return renderEndPage();
  }
}

function renderStartPage() {
  console.log('renderStartPage ran!');
  return `
    <div class="wrapper">
      <div class="group">
        <div class="item">
          <p></p>
        </div>
        <div class="item">
          <p>Welcome message</p>
        </div>
        <div class="item">
          <button class="start">Start Mission</button>
        </div>
      </div>
    </div>`;
}

function renderQuestionPage() {
  console.log('renderQuestionPage ran!')
  return `
    <div class="wrapper">
      <div class="group">
        <div class="item">
          <p>Question</p>
        </div>
         <div class="item">
          <form>
            <input type="radio" id="male" name="gender" value="male">
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female">
              <label for="female">Female</label>
              <input type="radio" id="other" name="gender" value="other">
              <label for="other">Other</label>
              <input type="radio" id="other" name="gender" value="other">
              <label for="other">Other</label>
              <button type="submit">Button</button>
          </form>
        </div>
        <div class="item">
          <button><span>Start New Quiz</span></button>
          <button><span>Stop here! See my score</span></button>
        </div>
      </div>
    </div>`;
}

function renderEndPage() {
  console.log('renderEndPage ran!')
  return `
    <div class="wrapper">
      <div class="group">
        <div class="item">
          <p></p>
        </div>
        <div class="item">
          <p>Welcome message</p>
        </div>
        <div class="item">
          <button class="start"<span>Beat IT</span></button>
        </div>
      </div>
    </div>`;
}

//   if (item.quizStarted = false) {
//     return `
//     <div class="wrapper">
//       <div class="group">
//         <div class="item">
//           <p></p>
//         </div>
//         <div class="item">
//           <p>Welcome message</p>
//         </div>
//         <div class="item">
//           <button><span>Start Mission</span></button>
//         </div>
//       </div>
//     </div>`;
//   } else if {
//     (item.quizStarted !== false) {
//       return `
//       <div class="wrapper">
//         <div class="group">
//           <div class="item">
//             <p>Question</p>
//           </div>
//           <div class="item">
//             <form>
//               <input type="radio" id="male" name="gender" value="male">
//               <label for="male">Male</label>
//               <input type="radio" id="female" name="gender" value="female">
//               <label for="female">Female</label>
//               <input type="radio" id="other" name="gender" value="other">
//               <label for="other">Other</label>
//               <input type="radio" id="other" name="gender" value="other">
//               <label for="other">Other</label>
//               <button type="submit">Button</button>
//             </form>
//           </div>
//           <div class="item">
//             <button><span>Start New Quiz</span></button>
//             <button><span>Stop here! See my score</span></button>
//           </div>
//         </div>
//       </div>`;
//     }
//   }
// }


/*
 <div class="wrapper">
      <div class="group">
        <div class="item">
          <p>Question</p>
        </div>
        <div class="item">
          <form>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label>
            <button type="submit">Button</button>
          </form>
        </div>
        <div class="item">
          <button><span>Start Mission</span></button>
          <button><span>Abort Mission</span></button>
        </div>
      </div>
    </div>
*/


// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuestion() {
  console.log('Render question ran!');
  const MAINVARI = someFunction(STORE); //someFunction stands in for the template generator
  $('main').html(MAINVARI);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function clickEvent() {
  console.log('clickEvent ran!')
  $('button.start').click(event => {
    STORE.quizStarted = true;
    STORE.questionNumber += 1;
    renderQuestion()
    console.log($(event.target));
  })   
}


/* PSEUDO CODING */

// // Rendering -- 
// Start page is the default stage, basic welcome message and start button. Listening for one event, onClick for the StartMission button, which moves to question 1.
// Question page, listening for a onSubmit button which moves to the next question and records answer, checking against correct answer, to update score.

function quizApp() {
  renderQuestion();
  clickEvent();
}

$(quizApp);