class Player {
    constructor(nameIn) {
        this.name = nameIn;
        this.hand = new Hand();
    }

    getHandSize() {
        return this.hand.cards.length;
    }

    getScore() {
        return this.hand.score;
    }

    hit(deckIn) {
        console.log(`${this.name} turn`);
        const card = deckIn.draw();
        this.hand.addToHand(card);
        addCardToPlayerHand(card);
        this.hand.calculateScore();
    }
}