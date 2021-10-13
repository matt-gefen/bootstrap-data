/*-------------------------------- Constants --------------------------------*/
import * as quotes from "../data/quotes.js"

const newQuotes = []
/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const swiftButton = document.querySelector('#swift-button')
const yeButton = document.querySelector('#ye-button')
const cardContainer = document.querySelector('#card-container')


/*----------------------------- Event Listeners -----------------------------*/
swiftButton.addEventListener("click", function(evt) {
  const newTaylorQuote = {
    artist: "T-Swift",
    text: quotes.getRandomSwiftQuote()
  }
  newQuotes.push(newTaylorQuote)
  console.log(newQuotes)
})
yeButton.addEventListener("click", function(evt) {
  const newKanyeQuote = {
    artist: "Kanye",
    text: quotes.getRandomKanyeQuote()
  }
  newQuotes.push(newKanyeQuote)
  console.log(newQuotes)
})


/*-------------------------------- Functions --------------------------------*/