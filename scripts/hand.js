// [X] Hand has a collection of cards
// [X] Hand can be added to
// [X] Hand has a score
// [X] Hand can flip all cards


class Hand {
    constructor() {
        this.cards = [];
        this.score = 0;
    }

    addToHand(cardIn) {
        this.cards.push(cardIn);
        this.calculateScore();
    }

    calculateScore() {
        this.score = 0;
        let aces = 0;
        for(let card = 0; card < this.cards.length; card++) {
            if(this.cards[card].value > 10) {
                if(this.cards[card].value == 14) {
                    aces ++;
                } else {
                    this.score += 10;                   
                }
            } else {
                this.score += this.cards[card].value;
            }
        }

        if(aces == 1) {
            if(this.score > 10) {
                this.score += 1;
            } else {
                this.score += 11;
            }
        } else if(aces == 2) {
            if(this.score > 9) {
                this.score += 1 * aces;
            } else {
                this.score += 12;
            }
        } else if(aces == 3) {
            if(this.score > 8) {
                this.score += 1 * aces;
            } else {
                this.score += 13;
            }
        } else if(aces == 4) {
            if(this.score > 7) {
                this.score += 1 * aces;
            } else {
                this.score += 14;
            }
        }
    }

    showHand() {
        for(let card = 0; card < this.cards.length; card++) {
            this.cards[card].orientation = `front`;
        }
    }

    emptyHand() {
        this.cards = [];
    }
}