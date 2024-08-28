import Ship from "./Ship.js";

//Contains information on the ships owned by the player and the state of both their personal game grid and the enemy's game grid
export default class Player {
    constructor(playerName) {
        this.gameGrid;
        this.playerName = playerName;
        this.playerShips = [];
        this.playerBoard;
        this.radarBoard;
        this.cardinalRefs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
    }

    generateShips() {
        const howManyShips = prompt(
            "How many ships would you like to add to the game board?"
        );
        for (let i = 0; i < howManyShips; i++) {
            const newShip = this.generateShip();
            this.playerShips.push(newShip);
        }
    }

    clearShips() {
        this.playerShips = [];
    }

    generateShip() {
        const shipSize = prompt("What size would you like this ship to be?");
        const shipName = prompt("What name would you like to give this ship?");

        const thisShip =
            shipSize < this.playerBoard.gridSize
                ? new Ship(shipSize, shipName)
                : this.generateShip();
        return thisShip;
    }

    placeShips() {
        this.playerShips.forEach((ship) => {
            this.placeShip(ship);
        });
    }

    placeShip(shipToPlace) {
        const coordinates = [];
        coordinates.push(
            prompt("What x coordinate should this ship be placed at?")
        );
        coordinates.push(
            prompt("What y coordinate should this ship be placed at?")
        );
        const orientationIndex = prompt(
            "Which orientation would you like this ship to be in?"
        );

        const shipPlaced = this.playerBoard.placeShip(
            coordinates,
            this.cardinalRefs[orientationIndex],
            shipToPlace
        );

        if (!shipPlaced) {
            alert("Ship placement was unsuccessful, please try again.");
            this.placeShip(shipToPlace);
        }
    }
}
