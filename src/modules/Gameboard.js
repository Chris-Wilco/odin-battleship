import Gamegrid from "./Gamegrid.js";

export default class Gameboard {
    constructor(player1, player2, gridSize) {
        this.player1 = player1;
        this.player2 = player2;
    }

    assignGameGrids() {
        this.player1.playerBoard = new Gamegrid(gridSize);
        this.player1.enemyBoard = new Gamegrid(gridSize);
        this.player2.playerBoard = new Gamegrid(gridSize);
        this.player2.enemyBoard = new Gamegrid(gridSize);
    }
}
