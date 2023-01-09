let firstCard = randomNumber()
let secondCard = randomNumber()
let cards = [firstCard,secondCard]
let sum = cards[0]+cards[1]
let hasBlackJack = false
let isAlive = true
let message =""

const startGameBtn = document.querySelector('#start-game-btn')
const newCardBtn = document.querySelector('#new-card-btn')
const messageEl = document.querySelector('#message-el')
const cardsEl = document.querySelector('#cards-el')
const sumEl = document.querySelector('#sum-el')


startGameBtn.addEventListener('click',renderGame)
newCardBtn.addEventListener('click',newCard)

function randomNumber(){
    return Math.floor(Math.random()*12)+1;
}

function startGame(){
    renderGame()
}

function renderGame(){

    // cardsEl.innerText ="Cards: " + cards[0] + " " + cards[1] + " "
    for(let i=0 ; i< cards.length; i++){
        cardsEl.textContent +=cards[i] + " "
    }
    sumEl.innerText = "Sum: " + sum
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
    let card = randomNumber()
    sum += card
    cards.push(card)
    
    
    renderGame()
}
