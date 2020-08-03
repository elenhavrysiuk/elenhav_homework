let suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let value = [6 , 7 , 8 , 9 , 10 , 'Jack','Queen','King', 'Ace'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Desk {
    constructor() {
        this.desk = [];
    }

    createDesk(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.desk.push(new Card(suit, value));
            }
        }
        return this.desk.length;
    }

}

let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let values = [6 , 7 , 8 , 9 , 10 , 'Jack','Queen','King', 'Ace'];
let desk = new Desk();
desk.createDesk(suits, values);
let asd = document.createElement('div');
asd.innerHTML = desk;
document.body.appendChild(asd);