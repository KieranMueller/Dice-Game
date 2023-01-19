const die1 = document.querySelector(".die1")
const die2 = document.querySelector(".die2")
let input = document.querySelector("#number")
let html = document.querySelector("html")
let predictDiv = document.querySelector(".predict-div")
let buttonDiv = document.querySelector(".button-div")
let escapeDiv = document.querySelector(".escape-div")
let wrongTally = document.querySelector(".wrong-div")
let cheatDiv = document.querySelector(".cheat-div")
let number
let number2
let sumOfDie

die1.innerHTML = `<img src="die1.svg" />`
die2.innerHTML = `<img src="die1.svg" />`

function escape() {
    alert("THERE IS NO ESCAPE")
    location.reload()
    alert("just kiddin'")
}
let wrongArray = []

function roll() {
    if (input.value === "") {
        cheatDiv.innerHTML = `<p>You're not fooling me, just clicking Roll without entering a number... I won't stop you though</p>`
    }
    if (input.value !== "") {
        cheatDiv.innerHTML = ``
    }
    randomDie()
    if(input.value !== sumOfDie) {
        wrongArray.push(2)
            wrongTally.innerHTML = `<p>You've been wrong ${wrongArray.length} 
            time${wrongArray.length > 1 ? "s" : ""} in a row now, keep it up champ</p>`   
            if(wrongArray.length === 4) {
                wrongTally.innerHTML = `<p>Surely you'll guess it right soon!</p>`
            }
            if(wrongArray.length === 7) {
                wrongTally.innerHTML = `<p>Are you even trying!?</p>` 
            }
            if(wrongArray.length === 11) {
                wrongTally.innerHTML = `<p>You do know that some totals have higher probability than others... right?</p>`
            }
            if(wrongArray.length === 14) {
                wrongTally.innerHTML = `<p>You should give up</p>`
            }
            if(wrongArray.length === 18) {
                wrongTally.innerHTML = `<p>Wake me up if you win</p>`
            }
            if(wrongArray.length > 22) {
                wrongTally.innerHTML = `<p>Ah... I see what you're doing. Purposely losing just to read my messages huh? Well I quit.</p>`
            }
    }
    if(input.value == sumOfDie) {
        html.classList.add("creepy")
        predictDiv.innerHTML = ``
        wrongTally.innerHTML = ``
        escapeDiv.innerHTML = `<button class="escape" onclick="escape()">Escape</button>`
        buttonDiv.innerHTML = `<h1>YES, IT WAS ${sumOfDie}, HOW DID YOU KNOW! WITCH - NIGHTMARE NIGHTMARE NIGHTMARE ترجمة هذه الجملة المخيفة لا تعني شيئًا
        </h1>`
    }
input.value=""
}

function randomDie() {
    number = Math.floor((Math.random()*6)+1)
    if(number === 1){
        die1.innerHTML = `<img src="die1.svg" />`
    }
    if(number === 2){
        die1.innerHTML = `<img src="die2.svg" />`
    }
    if(number === 3){
        die1.innerHTML = `<img src="die3.svg" />`
    }
    if(number === 4){
        die1.innerHTML = `<img src="die4.svg" />`
    }
    if(number === 5){
        die1.innerHTML = `<img src="die5.svg" />`
    }
    if(number === 6){
        die1.innerHTML = `<img src="die6.svg" />`
    }
    number2 = Math.floor((Math.random()*6)+1)
    if(number2 === 1){
        die2.innerHTML = `<img src="die1.svg" />`
    }
    if(number2 === 2){
            die2.innerHTML = `<img src="die2.svg" />`
    }
    if(number2 === 3){
                die2.innerHTML = `<img src="die3.svg" />`
    }
    if(number2 === 4){
        die2.innerHTML = `<img src="die4.svg" />`
    }
    if(number2 === 5){
        die2.innerHTML = `<img src="die5.svg" />`
    }
    if(number2 === 6){
        die2.innerHTML = `<img src="die6.svg" />`
    }

    sumOfDie = number + number2
    return sumOfDie
}



