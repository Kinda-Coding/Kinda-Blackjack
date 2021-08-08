const startGameButton = document.getElementById(`start-game-div`);
const hitButton = document.getElementById(`hit-div`);
const holdButton = document.getElementById(`hold-div`);

startGameButton.addEventListener(`click`, function() {
    startGame()
});

hitButton.addEventListener(`click`, function() {
    takePlayerTurn(`hit`, player)
});

holdButton.addEventListener(`click`, function() {
    takePlayerTurn(`hold`, player)
});
