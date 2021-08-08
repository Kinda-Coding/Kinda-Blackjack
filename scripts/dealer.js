class Dealer extends Player {
    constructor(nameIn) {
        super(nameIn);
    }

    hit(deckIn) {
        console.log(`${this.name} turn`);
        const card = deckIn.draw();
        this.hand.addToHand(card);
        addCardToDealerHand(card);
        this.hand.calculateScore();
    }
}