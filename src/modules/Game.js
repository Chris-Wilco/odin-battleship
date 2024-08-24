import Gameboard from "./Gameboard.js";

//Contains game mechanics
//Facilitates interactions between the players and the Gameboard
export default class Game {
    constructor(player1, player2) {
        this.gridSize = 5;
        this.player1 = player1;
        this.player2 = player2;
        this.gameBoard = new Gameboard(player1, player2, gridSize);
    }

    startGame() {}

    //creates both players sets of ships and places them on the board
    setUpGame() {
        this.player1.generateShip(2, "ship1");
    }

    playerTurn() {
        //takes an x/y coordinate and attempts to place a torpedo on the opposing players game grid
        //if the coordinate contains a ship, the corresponding ship is marked as hit, as is this square of both the enemy board, and the player board
        //if no ship, mark square on board and pass turn
    }
}
