const dealerHand = document.getElementById(`dealer-cards-container`);
const playerHand = document.getElementById(`player-cards-container`);

function wipeBoard() {
    dealerHand.innerHTML = ``;
    playerHand.innerHTML = ``;
}

function addCardToPlayerHand(cardIn) {
    const graphicalCard = document.createElement(`div`);
    graphicalCard.className = `card`;

    const graphicalCardFaceValue = document.createElement(`div`);
    graphicalCardFaceValue.className = `card-face-value`;
    graphicalCardFaceValue.innerHTML = cardIn.faceValue;

    const graphicalCardSuit = document.createElement(`div`);
    graphicalCardSuit.className = `card-suit`;
    graphicalCardSuit.innerHTML = cardIn.faceSuit;

    graphicalCard.appendChild(graphicalCardSuit);
    graphicalCard.appendChild(graphicalCardFaceValue);
    playerHand.appendChild(graphicalCard);
}

function addCardToDealerHand(cardIn) {
    const graphicalCard = document.createElement(`div`);
    graphicalCard.className = `card`;

    const graphicalCardFaceValue = document.createElement(`div`);
    graphicalCardFaceValue.className = `card-face-value`;
    graphicalCardFaceValue.innerHTML = cardIn.faceValue;

    const graphicalCardSuit = document.createElement(`div`);
    graphicalCardSuit.className = `card-suit`;
    graphicalCardSuit.innerHTML = cardIn.faceSuit;

    graphicalCard.appendChild(graphicalCardSuit);
    graphicalCard.appendChild(graphicalCardFaceValue);
    dealerHand.appendChild(graphicalCard);
}

function displayResults(messageIn) {
    const displayPopup = document.createElement(`div`);
    displayPopup.className = `popup`;
    displayPopup.id = `popup-collapse-div`;

    const collapseButton = document.createElement(`div`);
    collapseButton.className = `collapse-button`;
    collapseButton.innerHTML = `X`;
    collapseButton.addEventListener(`click`, function() {
        removePopup();
    });

    const resultMessage = document.createElement(`div`);
    resultMessage.className = `popup-message-div`;
    resultMessage.innerHTML = messageIn;

    displayPopup.appendChild(collapseButton);
    displayPopup.appendChild(resultMessage);
    document.body.appendChild(displayPopup);
}

function removePopup() {
    document.getElementById(`popup-collapse-div`).remove();
}

function updateScoreBoards(playerIn) {
    document.getElementById(`player-dashboard`).innerHTML = `Player- Score [${playerIn.getScore()}] | Cards [${playerIn.getHandSize()}]`;
    document.getElementById(`dealer-dashboard`).innerHTML = `Dealer- Score [${dealer.getScore()}] | Cards [${dealer.getHandSize()}]`;
}