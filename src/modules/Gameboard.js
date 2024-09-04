import Gamegrid from "./Gamegrid.js";

//Gameboard to keep track of all grids that compose the gameboard
export default class Gameboard {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    assignGameGrids() {
        this.player1.playerBoard = new Gamegrid();
        this.player1.radarBoard = new Gamegrid();
        this.player2.playerBoard = new Gamegrid();
        this.player2.radarBoard = new Gamegrid();
    }
}
