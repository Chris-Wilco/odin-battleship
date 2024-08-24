import Ship from "./Ship.js";

//Contains information on the ships owned by the player and the state of both their personal game grid and the enemy's game grid
export default class Player {
    constructor(playerName) {
        this.gameGrid;
        this.playerName = playerName;
        this.playerShips = [];
        this.playerBoard;
        this.enemyBoard;
        this.cardinalRefs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
    }

    generateShips() {
        for (let i = 0; i < 2; i++) {
            this.generateShip(2, `ship${i}`);
        }
    }

    /* createPlayerShips(player, numberOfShips) {
        //creates x number of ships for a player
        for (let i = 0; i < numberOfShips; i++) {}
    }
 */
    generateShip(shipSize, shipName) {
        this.playerShips.push(new Ship(shipSize, shipName));
    }

    placeShip(player, xCoord, yCoord, orientation) {
        if (!this.playerBoard.legalSquare(xCoord, yCoord)) {
            return false;
        }

        //asks for an x and y coordinate to place the ship, as well as the orientation of the ship
        //determines if the location is a valid one by checking the grid and the orientation against the grid size
        //if location is valid, places the ship on the grid by marking the appropriate grid spaces as containing a ship
    }
}
