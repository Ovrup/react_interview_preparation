export const SUITS = ["♣", "♦", "♥", "♠"]
export const CARD_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

export default class Deck {

    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length;
    }


    shuffleCard() {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            const newPosition = Math.ceil(Math.random() * (i + 1));
            let oldValue = this.cards[newPosition];
            this.cards[newPosition] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

function freshDeck() {
    return SUITS.flatMap((suit) => {
        return CARD_VALUES.map((val) => {
            return new Card(suit, val)
        })
    });
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}