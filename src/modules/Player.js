import Ship from "./Ship.js";

//Contains information on the ships owned by the player and the state of both their personal game grid and the enemy's game grid
export default class Player {
    constructor(playerName) {
        this.gameGrid;
        this.playerName = playerName;
        this.playerShips = [];
        this.playerBoard;
        this.enemyBoard;
    }

    generateShips() {
        for (let i = 0; i < 2; i++) {
            this.generateShip(2, `ship${i}`);
        }
    }

    generateShip(shipSize, shipName) {
        this.playerShips.push(new Ship(shipSize, shipName));
    }
}
