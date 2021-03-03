/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
const quotes = []


/*------------------------ Cached Element References ------------------------*/
const swiftBtn = document.getElementById("swiftButton")
const yeezyBtn = document.getElementById("yeezyButton")
const container = document.getElementById("containerDiv")

/*----------------------------- Event Listeners -----------------------------*/
swiftBtn.addEventListener('click', ()=> {
  fetch("https://api.taylor.rest/")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let newQuote = {}
    newQuote["artist"] = "T-Swift"
    newQuote["quote"] = data.quote
    quotes.push(newQuote)
  })
  .catch((err) => {
    console.log(err)
  })
})

yeezyBtn.addEventListener('click', ()=> {
  fetch("https://api.kanye.rest/")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    let newQuote = {}
    newQuote["artist"] = "Yeezy"
    newQuote["quote"] = data.quote
    quotes.push(newQuote)
  })
  .catch((err) => {
    console.log(err)
  })
})

/*-------------------------------- Functions --------------------------------*/


