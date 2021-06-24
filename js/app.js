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

import { getRandomKanyeQuote, getRandomTaylorQuote } from "../data/quotes.js"

/*-------------------------------- Variables --------------------------------*/

const quotes = []

/*------------------------ Cached Element References ------------------------*/

const swiftBtn = document.querySelector("#swift-button")
const yeezyBtn = document.querySelector("#yeezy-button")
const cardContainer = document.querySelector("#card-container")

/*----------------------------- Event Listeners -----------------------------*/

swiftBtn.addEventListener("click", createQuote)
yeezyBtn.addEventListener("click", createQuote)

/*-------------------------------- Functions --------------------------------*/

function createQuote(evt) {
  const artist = evt.target.id === "swift-button" ? "T-Swift" : "Yeezy"
  const newQuote = {
    artist: artist,
    text: artist === "Yeezy" ? getRandomKanyeQuote() : getRandomTaylorQuote()
  }
  console.log(newQuote)
  quotes.push(newQuote)
  console.log(quotes)
  render()
}

function render() {
  cardContainer.innerHTML = ""
  quotes.forEach(quote => {
    appendQuote(quote)
  })
}

function appendQuote(quote) {
  let quoteCard = document.createElement("div")
  quoteCard.classList.add("card", `${quote.artist.toLowerCase()}`)
  quoteCard.innerHTML =
  `<div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${quote.text}</p>
      <footer class="blockquote-footer text-end artist-name">
        ${quote.artist}
      </footer>
    </blockquote>
  </div>`
  cardContainer.appendChild(quoteCard)
}