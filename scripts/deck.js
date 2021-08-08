// [X] Deck has a collection of cards
// [X] --> 4 suits of 13 cards| 52 total cards
// [X] Deck can be shuffled
// [X] Deck can be drawn from

class Deck {
    constructor() {
        this.cards = [];
    }

    build() {
        const suits = [`Clubs`, `Diamonds`, `Hearts`, `Spades`];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for(let suit = 0; suit < suits.length; suit++) {
            for(let value = 0; value < values.length; value++) {
                this.cards.push(new Card(suits[suit], values[value]));
            }
        }
    }

    shuffle() {
        for(let card = 0; card < this.cards.length; card++) {
            let randomCardIndex = Math.floor(Math.random() * Math.floor(this.cards.length));
            let swapCard = this.cards[card];
            let randomCard = this.cards[randomCardIndex];
            this.cards[card] = randomCard;
            this.cards[randomCardIndex] = swapCard;
        }
    }

    draw() {        
        if(this.cards.length <= 4) {
            console.log(`Deck Empty...`);
            this.build();
            this.shuffle();
        }
        let drawnCard = this.cards.pop();
        console.log("DREW: ", drawnCard, " | ", this.cards.length);
        return drawnCard;
    }
}

