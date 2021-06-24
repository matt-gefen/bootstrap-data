// - Add the HTML for two buttons (one for T-Swift, one for Yeezy)
// - Add the HTML for a ‘Mode Swap’ or ‘Dark Mode’ button.
// - Add a container element for the ‘card’ components to be appended to as children
// - Add a cached element reference for the container element in the JS file
// - Add cached element references for each of the buttons
// - Add event listeners to each of the buttons (TEST with `console.log()`)
// - Write code to retrieve the data and log the data using `console.log()`
// - Tweak event listeners so that the quote is stored in a variable (TEST with `console.log()`)
// - Create a test ‘card’ element with Bootstrap
// - Create a render function
// - Add a function to handle appending a ‘card’ containing the quote to the container element.
// - Style each card differently, based on whether the quote is from T-Swift or Yeezy. (What options do we have to handle this?)
// - Add a button to the card that will allow us to REMOVE the quote from list. (What are some approaches we can take to do this?)
// - Add responsive Design
// - Add Google Fonts
// - Add Light/Dark Mode

/*-------------------------------- Constants --------------------------------*/

import { getRandomKanyeQuote, getRandomTaylorQuote } from "../data/quotes"

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const swiftBtn = document.querySelector("#swift-button")
const yeezyBtn = document.querySelector("#yeezy-button")
const cardContainer = document.querySelector("#card-container")

/*----------------------------- Event Listeners -----------------------------*/

swiftBtn.addEventListener("click", () =>{
  console.log("taylor is listening!")
})

yeezyBtn.addEventListener("click", () =>{
  console.log("kanye is listening!")
})

/*-------------------------------- Functions --------------------------------*/