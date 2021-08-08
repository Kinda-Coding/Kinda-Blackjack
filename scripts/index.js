// Objective to get as close to 21 in score
// If scored 21 on first deal, Win the game
// If not win the game, hit or stand
// -> Hit adds a card from the deck to the player's hand
// -> Stand passes turn to Dealer
// -> Bust happens when score > 21
// On Dealer's turn


// Turn Based...
// [X] Draw two cards for both players
// [X] Update Score
// [X] *WHILE* Player Score <= 21 - CHECK Click Button [ HIT | HOLD ]
// [X] Update Score

let gameRunning = false;
let playerName = `player`; 
let dealerName = `dealer`;
const player = new Player(playerName);
const dealer = new Dealer(dealerName);
const deck = new Deck();
deck.build();
deck.shuffle();


function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        wipeBoard();
        
        for(let i  = 0; i < 2; i ++) {
            player.hit(deck);
            dealer.hit(deck);
        }
        updateScoreBoards(player);

        player.hand.showHand();
        dealer.hand.cards[0].flip();

        console.log(player.hand, dealer.hand);
        if(player.getScore() == 21) {
            playerWinGame(true, player);
        }

    } else {
        console.log(`Game already running...`);
        return;
    }
}

function playerWinGame(isFirstTurnIn, playerIn) {
    displayResults(`Player wins with ${playerIn.getScore()}`);
    console.log(`Player wins with ${playerIn.getScore()}`);
    playerIn.hand.emptyHand();
    dealer.hand.emptyHand();
    gameRunning = false;
}

function playerLoseGame(playerIn) {
    displayResults(`Player loses with ${playerIn.getScore()}`);
    if(playerIn.getScore > 21) {
        console.log(`Player busts with ${playerIn.getScore()}`);       
    } else {
        console.log(`Player loses with ${playerIn.getScore()}`);     
    }
    playerIn.hand.emptyHand();
    dealer.hand.emptyHand();
    gameRunning = false;
}

function tieGame(playerIn) {
    displayResults(`Tie Game with ${playerIn.getScore()}`);
    console.log(`Tie Game with ${playerIn.getScore()}`);   
    playerIn.hand.emptyHand();
    dealer.hand.emptyHand();
    gameRunning = false;  
}

// TODO
function compareScores(playerIn) {
    console.log(`PLAYER: ${playerIn.getScore()}`);
    console.log(`DEALER: ${dealer.getScore()}`);

    let playerBust = false;
    let dealerBust = false;

    if(playerIn.getScore() > 21) {
        playerBust = true;
    }
    if(dealer.getScore() > 21) {
        dealerBust = true;
    }
    console.log(`D: ${dealerBust}, P: ${playerBust}`);

    if((dealerBust && playerBust) || dealer.getScore() == playerIn.getScore()) {
        tieGame(playerIn); 
    } else if((playerIn.getScore() > dealer.getScore()) && !playerBust) {
        playerWinGame(false, playerIn);
    } else if((playerIn.getScore() > dealer.getScore()) && playerBust) {
        playerLoseGame(playerIn);
    } else if((playerIn.getScore() < dealer.getScore()) && !dealerBust) {
        playerLoseGame(playerIn);
    } else if((playerIn.getScore() < dealer.getScore()) && dealerBust) {
        playerWinGame(false, playerIn);
    } 
}

function takeDealerTurn(playerIn) {
    if(gameRunning) {
        dealer.hand.showHand();
        while(dealer.getScore() <= 16) {
            dealer.hit(deck);
        }
        updateScoreBoards(playerIn);
        compareScores(playerIn);
        gameRunning = false;
    } else {
        console.log(`Game not running!`);
        return;
    }
}

function takePlayerTurn(decisionIn, playerIn) {
    if(gameRunning) {
        if(decisionIn == `hit`) {
            playerIn.hit(deck);
        } else if(decisionIn == `hold`) {
            takeDealerTurn(playerIn);
        } 
        updateScoreBoards(playerIn);
    } else {
        console.log(`Game not running!`);
        return;       
    }
}


