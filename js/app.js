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

function appendDiv(quote, artist) {
  let newDiv = document.createElement("div")
  newDiv.innerHTML = 
  `<div class="card ${artist.toLowerCase()}">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${quote}</p>
        <footer class="blockquote-footer">${artist}</footer>
      </blockquote>
    </div>
  </div>`
  container.appendChild(newDiv)
}

