/*
Pseudocode, Function Stubs & Requirements (Per Page)

**********
Database States:
1. Start Page
    > 'Reset' database
    > STORE.quizStarted is false
    > STORE.quizNumber = 0

2. Question Page
    > STORE.quizStarted is set to true
    > STORE.quizNumber += 1

3. End Page
    > STORE.quizStarted is left unchanged
    > STORE.quizNumber should now be equal to 6 (At 6, template generator will generate HTML code for end page)
    > OR BETTER: STORE.quizNumber should be equal to STORE.questions.length to trigger end page (So we are free to add questions)
**********

**********
Start Page

Requirement: Start screen should have a button to start quiz

Pseudocode:
Resets database
    > See start page database state above

Template generated must have a welcome message

Button
    > There must be a button to propel user forward to next page/start quiz
    > STORE.quizStarted is set to true at this point
    > STORE.quizNumber increments

Function Stubs:
1. Render Function
    > At document upload, render page
    > Render page injects generated html template to main

2. Template Generator Function
    > Generate html code to be injected on main depending on the state of database (in this case, STORE)
    > Different states of the database

3. Start Quiz Event Listener
    > Event listener bound to start button
    > Upon clicking, database updates
        > STORE.quizStarted = true
        > STORE.quizNumber ++/+= (whichever is appropriate)
**********

**********
Question Page

Requirements:
    > At least 5 questions
    > 1 question at a time
    > No skipping/Input is required!
    > See question number and current score
    > Upon submission, receive feedback
    > Interact with element to move on

Function Stubs:
1. Template Generator Function
    > Template string for questions must be updated to incorporate dynamic data (STORE[questions][array index corresponding to (quizNumber-1)][question] && STORE[questions][array index corresponding to (quizNumber-1)][answer])
    > Radio buttons must have dynamic 'val' attribute (this value will be used to compare with correct answer)
    > Template to show QUESTION NUMBER and CURRENT SCORE (preferably on top of page, since bottom has been populated with buttons)

2. Val Attribute Generator

3. Question Number Generator
    > Result to be added to template string above
    > `${STORE.quizNumber} out of ${total number of questions}`
    > On second thought, this function may not be needed. Probably might just directly add to template string above.

4. Current Score Generator
    > Result to be added to template string above
    > `${STORE.score / highest possible score}`

5. Submit Answer Event Listener (Don't forget to use event.preventDefault here)
    > Listens for submit event and sets input value to a variable
    > Passes input to some sort of checker function (see below)
    > Must have render page function after ^ function

6. Check Answer Function
    > Could be one of 2 responses:
        1. Correct Answer
            > Call a function to generate HTML code/template to show "incorrect answer" text and a button to go to next page
        2. Incorrect Answer
            > Call a function to generate HTML code/template to show "incorrect answer" text and a button to go to next page

7. Next Page Event Listener
    > Upon clicking, database updates
        > STORE.quizStarted = true
        > STORE.quizNumber ++/+= (whichever is appropriate)
    > Don't forget to call render page ()
**********

**********
End Page

1. Shows final score and word of thanks or something depending on score

2. Restart Quiz Button Event Listener
    > Resets database


























*/