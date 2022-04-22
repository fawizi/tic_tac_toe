// const tile = document.querySelectorAll(".tile");
// const PLAYER_X = "X";
// const PLAYER_O = "O";
// let turn = PLAYER_X;

const boardState = Array(tiles.lenght);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playagain = document.getElementById("play-again");

//sounds
const gameoversound = new Audio("sounds/game_over.wav");
const click = new Audio("sounds/click.wav");

tiles.forEach(tile=> tile.addEventListener("click", tileClick));

function tileClick(event) {
    if (gameOverArea.contains("visible")) {
        return;
    }

const tile = event.target;
const tileNumber = tile.dataset.index; 
if (tile.innerText != "") {
    return;
}

if (turn === PLAYER_X){
    turn.innerText = PLAYER_X;
    boardState[tileNumber - 1] = PLAYER_X;
    turn = PLAYER_O;
  }
  
  }
