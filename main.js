let cards = []
let sum=0
let hasBlackJack = false
let isAlive = false
let message =""
let player = {
    name:"Akash",
    chips:150
}

const startGameBtn = document.querySelector('#start-game-btn')
const newCardBtn = document.querySelector('#new-card-btn')
const messageEl = document.querySelector('#message-el')
const cardsEl = document.querySelector('#cards-el')
const sumEl = document.querySelector('#sum-el')


startGameBtn.addEventListener('click',startGame)
newCardBtn.addEventListener('click',newCard)

const nameChips = document.querySelector('#name-chips')
nameChips.textContent=player.name + ": $ " + player.chips
function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13)+1

    if(randomNumber === 1){
        return 11;
    }else if(randomNumber > 10){
        return 10;
    }else {
        return randomNumber
    }

}

function startGame(){
    isAlive= true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = cards[0] + cards[1]
    // console.log(sum)
    renderGame()
}

function renderGame(){
    cardsEl.textContent ="Cards: "

    for(let i=0 ; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        message= "Do you want to draw a new card?"
    }else if(sum === 21){
        message= "You've got Blackjack!"
        hasBlackJack = true
    }else{
        message= "You are out of the Game"
        isAlive = false
    }
    messageEl.textContent=message
}

function newCard(){

    if(hasBlackJack === false && isAlive === true){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    
    renderGame()
    }
}
