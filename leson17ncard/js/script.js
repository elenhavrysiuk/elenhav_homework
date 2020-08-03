

let suit = ['hearts', 'diams', 'clubs', 'spades'];
let value = [6 , 7 , 8 , 9 , 10 , 'Jack','Queen','King', 'Ace'];

function card(suit, value) {
    this.suit = suit;
    this.value = value;
}

// create desk

const createDesk = () => {
    let desk = [];
desk.length = 0;

//36 cards create

suit.forEach(suits => {
    value.forEach(values => {
           desk.push(new card(suits, values));
    })
})
// make desk in the skrin

desk.forEach(cards => {
    let eachCard = document.createElement('div');
    eachCard.innerHTML = `
    <div class="card__face front">
    <img class="rybashka" src="/assets/images/card.jpg">
    </div>
    <div class="card__face back">&${cards.suit}; ${ cards.value}</div>
    <div class="card__suit back">&${cards.suit};</div>
    <div class="card__face--down back">&${cards.suit}; ${cards.value}</div>`
     
    eachCard.classList.add('card');

if(cards.suit === "diams" || cards.suit === "clubs" ) {
    eachCard.classList.add('red');
}else {
    eachCard.classList.add('black')
}

// add into the center sprite

let cardSuit = document.createElement('div');

cardSuit.classList.add('back');

if(cards.value === "Jack") {
    cardSuit.classList.add('jack');
  
}else if (cards.value === "Queen") {
    cardSuit.classList.add('queen');

}else if (cards.value === "King") {
    cardSuit.classList.add('king');
} 
eachCard.appendChild(cardSuit);


    document.getElementById('container').append(eachCard);
   
})
}
createDesk();