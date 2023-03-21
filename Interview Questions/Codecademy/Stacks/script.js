//WEB NAVIGATOR
/*
This project, Web Navigator, simulates the navigational operations of a web browser such as :

- opening a new web page,
- navigating back a page and
- going forward a page. We will use the Stack class to maintain the history of visited pages with a backPages stack and a nextPages stack.

When we open a new page, we push the previous page on the backPages stack. When we revisit an old page and then visit a new page from there, we clear any content in the nextPages stack.

When we revisit a back page, we push the current page on the nextPages stack. Like the back button and the next button on a web browser, the back page and next page operations can be enabled or disabled depending on the state of the two stacks. For example, if the backPages stack is empty, the back operation is disabled and will be enabled only when the stack has content.

User input is required to:

- enter a new page to be visited,
- navigate backward or forward a page, and
- to quit the program.

The option to navigate forward or backward is conditional depending on user input and the state of the stacks. We will explain this in more detail in the relevant tasks.

At every operation other than quitting, we display information about the current page and the top element of the two stacks
*/

const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "google.com";

// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action) {
  console.log(`\n${action}`);
  console.log(`Current page is ${currentPage}`);
  console.log("Back page = ", backPages.peek());
  console.log("Next page = ", nextPages.peek());
}
function newPage(page) {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("New page: ");
}
function backPage() {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
}
function nextPage() {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;
showCurrentPage("DEFAULT: ");
while (finish === false) {
  let instructions = baseInfo;
  if (backPages.peek() !== null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  if (nextPages.peek() !== null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);
  const answer = prompt(question);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  let lowerCaseAnswer = answer.toLowerCase();
  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    newPage(answer);
  } else if (showNext === true && lowerCaseAnswer === "n") {
    nextPage();
  } else if (showBack === true && lowerCaseAnswer === "b") {
    backPage();
  } else if (lowerCaseAnswer === "b") {
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    finish = true;
  }
}
