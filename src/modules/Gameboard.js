import GameGrid from "./GameGrid.js";

//GameBoard to keep track of all grids that compose the gameBoard
export default class GameBoard {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    assignGameGrids() {
        this.player1.playerBoard = new GameGrid();
        this.player1.radarBoard = new GameGrid();
        this.player2.playerBoard = new GameGrid();
        this.player2.radarBoard = new GameGrid();
    }
}
