const kirito = document.getElementById("Kirito-info")
const right1 = document.getElementById("right1")
const wrong1 = document.getElementById("wrong1")
const wrong2 = document.getElementById("wrong2")
const wrong3 = document.getElementById("wrong3")

const asuna = document.getElementById("Asuna-info")
const right2 = document.getElementById("right2")
const wrong4 = document.getElementById("wrong4")
const wrong5 = document.getElementById("wrong5")
const wrong6 = document.getElementById("wrong6")

const heathcliff = document.getElementById("Heathcliff-info")
const right3 = document.getElementById("right3")
const wrong7 = document.getElementById("wrong7")
const wrong8 = document.getElementById("wrong8")
const wrong9 = document.getElementById("wrong9")

right1.addEventListener(`click`, ()=>{
        console.log("Correct")
        kirito.style.color="aqua"
        right1.style.color="green"
})
wrong1.addEventListener(`click`, () =>{
     kirito.style.color = "black"
     wrong1.style.color = "red"
     console.log("Incorrect")
})
wrong2.addEventListener(`click`, () => {
    kirito.style.color = "black"
    wrong2.style.color = "red"
    console.log("Incorrect")
})
wrong3.addEventListener(`click`, () => {
    kirito.style.color = "black"
    wrong3.style.color = "red"
    console.log("Incorrect")
})
right2.addEventListener(`click`, ()=>{
    console.log("Correct")
    asuna.style.color="aqua"
    right2.style.color="green"
})
wrong4.addEventListener(`click`, () =>{
 asuna.style.color = "black"
 wrong4.style.color = "red"
 console.log("Incorrect")
})
wrong5.addEventListener(`click`, () => {
asuna.style.color = "black"
wrong5.style.color = "red"
console.log("Incorrect")
})
wrong6.addEventListener(`click`, () => {
asuna.style.color = "black"
wrong6.style.color = "red"
console.log("Incorrect")
})
right3.addEventListener(`click`, ()=>{
    console.log("Correct")
    heathcliff.style.color="aqua"
    right3.style.color="green"
})
wrong7.addEventListener(`click`, () =>{
 heathcliff.style.color = "black"
 wrong7.style.color = "red"
 console.log("Incorrect")
})
wrong8.addEventListener(`click`, () => {
heathcliff.style.color = "black"
wrong8.style.color = "red"
console.log("Incorrect")
})
wrong9.addEventListener(`click`, () => {
heathcliff.style.color = "black"
wrong9.style.color = "red"
console.log("Incorrect")
})
