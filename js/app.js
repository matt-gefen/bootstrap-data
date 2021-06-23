/*-------------------------------- Constants --------------------------------*/

import {getRandomKanyeQuote, getRandomTaylorQuote} from "../data/quotes.js"

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const swiftBtn = document.querySelector("#swift-button")
const yeezyBtn = document.querySelector("#yeezy-button")
const cardContainer = document.querySelector("#card-container")

/*----------------------------- Event Listeners -----------------------------*/

swiftBtn.addEventListener("click", () => {
  console.log("Taylor is listening!")
})

yeezyBtn.addEventListener("click", () => {
  console.log("Kanye is listening!")
})

/*-------------------------------- Functions --------------------------------*/

