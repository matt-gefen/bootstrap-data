/*-------------------------------- Constants --------------------------------*/

import {getRandomKanyeQuote, getRandomTaylorQuote} from "../data/quotes.js"
const colorScheme = {
  dark: "",
  change: function() {
    colorScheme.dark = colorScheme.dark ? "" : "dark"
    document.querySelector("body").setAttribute("class", colorScheme.dark)
  }
}

/*-------------------------------- Variables --------------------------------*/

const quotes = []

/*------------------------ Cached Element References ------------------------*/

const swiftBtn = document.querySelector("#swift-button")
const yeezyBtn = document.querySelector("#yeezy-button")
const cardContainer = document.querySelector("#card-container")
const lightDarkBtn = document.querySelector("#light-dark-button")

/*----------------------------- Event Listeners -----------------------------*/

swiftBtn.addEventListener("click", createQuote)
yeezyBtn.addEventListener("click", createQuote)
lightDarkBtn.addEventListener("click", colorScheme.change)

/*-------------------------------- Functions --------------------------------*/

function createQuote(evt) {
  const artist = evt.target.id === "swift-button" ? "T-Swift" : "Yeezy"
  const newQuote = {
    artist,
    text: artist === "Yeezy" ? getRandomKanyeQuote() : getRandomTaylorQuote()
  }
  quotes.push(newQuote)
  render()
}

function deleteQuote(evt) {
  const idx = evt.target.id.replace("delete-btn-", "")
  quotes.splice(idx, 1)
  render()
}

function addDeleteBtnListeners() {
  const deleteQuoteBtns = document.querySelectorAll(".delete-btn")
  if(deleteQuoteBtns.length){
    deleteQuoteBtns.forEach(deleteQuoteBtn => {
      deleteQuoteBtn.addEventListener("click", deleteQuote)
    })
  }
}

function render() {
  cardContainer.innerHTML = ""
  quotes.forEach((quote, idx) => {
    renderQuote(quote, idx)
  })
  addDeleteBtnListeners()
}

function renderQuote(quote, idx) {
  const quoteCard = document.createElement("div")
  quoteCard.classList.add("card", `${quote.artist.toLowerCase()}`)
  quoteCard.innerHTML =
  `<div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${quote.text}</p>
      <footer class="blockquote-footer text-end artist-name">
        ${quote.artist}
      </footer>
    </blockquote>
  </div>
  <footer class="card-footer">
    <button class="btn delete-btn" id="delete-btn-${idx}">X</button>
  </footer>`
  cardContainer.appendChild(quoteCard)
}

function checkUserColorSchemePreference() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    !colorScheme.dark
  ) {
    colorScheme.change()
  }
}

checkUserColorSchemePreference()