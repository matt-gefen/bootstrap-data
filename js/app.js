/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



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
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

yeezyBtn.addEventListener('click', ()=> {
  fetch("https://api.kanasasdfye.rest/")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

/*-------------------------------- Functions --------------------------------*/


