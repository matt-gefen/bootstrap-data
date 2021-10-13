/*-------------------------------- Constants --------------------------------*/
import * as quotes from "../data/quotes.js"

const newQuotes = []
/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const swiftButton = document.querySelector('#swift-button')
const yeButton = document.querySelector('#ye-button')
const cardContainer = document.querySelector('#card-container')


/*----------------------------- Event Listeners -----------------------------*/
swiftButton.addEventListener("click", createQuote)
yeButton.addEventListener("click", createQuote)



/*-------------------------------- Functions --------------------------------*/
function createQuote(evt) {
  const newQuote = {
    artist: evt.target.id === 'swift-button' ? 'T-Swift' : 'Kanye',
    text: evt.target.id === 'swift-button' ? quotes.getRandomSwiftQuote() : quotes.getRandomKanyeQuote()
  }
  newQuotes.push(newQuote)
  render()
}

function render() {
  cardContainer.innerHTML = ''
  newQuotes.forEach((quote) => {
    appendQuote(quote)
  })
}

function appendQuote(quote) {
  let quoteCard = document.createElement("div")
  quoteCard.classList.add("card",`${quote.artist.toLowerCase()}`)
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