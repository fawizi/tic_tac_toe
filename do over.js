const tile = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tile.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");

//sounds
const gameOverSound = new Audio("sounds/gameover.wav");
const clickSound = new Audio("sounds/click.wav");

tile.forEach((tile) => tile.addEventListener("click", tileclick));

function setHoverText(){
    tile.forEach(tile=>{
        tile.classList.remove("x-hover")
        tile.classList.remove("o-hover")
    })

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tile.forEach(tile=>{
        if(tile.innerText == ""){
            tile.classList.add(hoverClass);
        }
    })
}


setHoverText();

function tileclick(event) {
    if(gameOverArea.classList.contains("visible")) {
        return;
    }
    const tile = event.target;
    const tileNuber = tile.dataset.index;
    if(tile.innerText !="") {
        return;
    }

    if(turn === PLAYER_X){
        tile.innerText = PLAYER_X;
        boardState[tileNuber-1] = PLAYER_X;
        turn = PLAYER_O;
    }
    else {
        tile.innerText = PLAYER_O;
        boardState[tileNuber-1] = PLAYER_O;
        turn = PLAYER_X;
    }
 
    clickSound.play();
    setHoverText();
    checkWinner();
}

function checkWinner(){
    for(const winningCombination of winningCombinations){
        //object Destructuring
        const {combo, strikeClass} = winningCombination;
        const tileValue1 = boardState[combo[0]-1]
        const tileValue2 = boardState[combo[1]-1]
        const tileValue3 = boardState[combo[2]-1]

        if(tileValue1 != null && tileValue1 === tileValue2 && tileValue2 === tileValue3){
            strike.classList.add(strikeClass);
            gameOverArea(tileValue1);
        } 
    }
    //Check for draw
    const allTileFilledIn = boardState.every((tile)=> tile !== null);
    if (allTileFilledIn) {
        gameOverArea(null);
    }
}
//check for draw
const allTileFilledIn = boardState.every((tile) => tile !== null);9



const winningCombinations = [
    {combo:[1,2,3], strikeClass: "strike-row-1"},
    {combo:[4,5,6], strikeClass: "strike-row-2"},
    {combo:[7,8,9], strikeClass: "strike-row-3"},
    //columns
    {combo:[1,4,7], strikeClass: "strike-column-1"},
    {combo:[2,5,8], strikeClass: "strike-column-2"},
    {combo:[3,6,9], strikeClass: "strike-column-3"},
    //diagonals
    {combo:[1,5,9], strikeClass: "strike-diagonal-1"},
    {combo:[3,5,7], strikeClass: "strike-diagonal-2"},
 


];