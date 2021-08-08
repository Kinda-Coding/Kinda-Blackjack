// [X] Card has a suit and a value
// [X] Card can be flipped face up or face down

class Card {
    constructor(suitIn, valueIn) {
        this.suit = suitIn;
        this.value = valueIn;
        this.setFaceValue(valueIn);
        this.setFaceSuit(suitIn);
        this.faceSuit;
        this.faceValue;
        this.orientation = `back`;
    }

    flip() {
        if(this.orientation == `back`) {
            this.orientation = `front`;
        } else {
            this.orientation = `back`;
        }
    }

    setFaceSuit(suitIn) {
        if(suitIn == `Clubs`)    {
            this.faceSuit = `\u2663`;
        }   else if(suitIn == `Diamonds`)   {
            this.faceSuit = `\u2666`;
        }   else if(suitIn == `Hearts`)   {
            this.faceSuit = `\u2665`;
        }   else if(suitIn == `Spades`)   {
            this.faceSuit = `\u2660`;
        }
    }

    setFaceValue(valueIn) {
        if(valueIn<= 10) {
            this.faceValue = valueIn.toString();
        } else {
            if(valueIn == 11) {
                this.faceValue = `J`;
            } else if(valueIn == 12) {
                this.faceValue = `Q`;
            } else if(valueIn == 13) {
                this.faceValue = `K`;
            } else {
                this.faceValue = `A`;
            }
        }
    }
}