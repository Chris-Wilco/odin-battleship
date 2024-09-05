//Organize and catalog the state of each grid square

//GameGoard hath been changed

export default class GameGrid {
    constructor() {
        this.gridSize = 10;
        this.GameGrid = generateGridSquares();
        this.cardinalRef = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        return this.GameGrid;
    }

    generateGridSquares() {
        const totalGrid = [];
        for (let i = 0; i < this.gridSize; i++) {
            const gridColumns = [];
            for (let j = 0; j < this.gridSize; j++) {
                gridColumns.push(new GridSquare(i, j));
            }
            totalGrid.push(gridColumns);
        }
        return totalGrid;
    }

    legalSquare(coordinates) {
        return (
            this.validCoord(coordinates[0]) && this.validCoord(coordinates[1])
        );
    }

    validCoord(coord) {
        if (coord >= 0 && coord < this.gridSize) {
            return true;
        }
        return false;
    }

    alreadyHit(coordinates) {
        return this.GameGrid[coordinates[0]][coordinates[1]].isHit();
    }

    legalShipPlacement(coordinates, orientationPair, shipToPlace) {
        for (let i = 0; i < shipToPlace.shipSize; i++) {
            const theseCoordinates = [];
            theseCoordinates.push(coordinates[0] + i * orientationPair[0]);
            theseCoordinates.push(coordinates[1] + i * orientationPair[1]);
            if (
                !this.legalSquare(theseCoordinates) ||
                this.squareHasShip(theseCoordinates)
            ) {
                return false;
            }
        }

        return true;
    }

    squareHasShip(coordinates) {
        return this.GameGrid[coordinates[0]][coordinates[1]].containsShip();
    }

    placeShip(coordinates, orientationPair, shipToPlace) {
        if (
            !this.legalShipPlacement(coordinates, orientationPair, shipToPlace)
        ) {
            return false;
        }
        for (let i = 0; i < shipToPlace.shipSize; i++) {
            const theseCoordinates = [];
            theseCoordinates.push(coordinates[0] + i * orientationPair[0]);
            theseCoordinates.push(coordinates[1] + i * orientationPair[1]);

            this.GameGrid[theseCoordinates[0]][
                theseCoordinates[1]
            ].containsShip = true;
            this.GameGrid[theseCoordinates[0]][theseCoordinates[1]].ship =
                shipToPlace;
        }
        shipToPlace.anchorCoords = coordinates;
        shipToPlace.orientationPair = orientationPair;
        return true;
    }

    attackSquare(attackCoordinates) {
        const thisSquare =
            this.GameGrid[attackCoordinates[0]][attackCoordinates[1]];
        thisSquare.hasBeenAttacked = true;

        if (thisSquare.containsShip) {
            thisSquare.ship.hit();
            this.markHit(attackCoordinates);
            return true;
        }

        this.markMiss(attackCoordinates);
        return false;
    }

    //will also update the visual grid with a red peg
    markHit(attackCoordinates) {
        const thisSquare =
            this.GameGrid[attackCoordinates[0]][attackCoordinates[1]];
        thisSquare.hit = true;
    }

    //will also update the visual grid with a white peg
    markMiss(attackCoordinates) {
        const thisSquare =
            this.GameGrid[attackCoordinates[0]][attackCoordinates[1]];
        thisSquare.miss = true;
    }
}

export class GridSquare {
    constructor(xCoord, yCoord) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.hit = false;
        this.miss = false;
        this.containsShip = false;
        this.ship;

        this.hasBeenAttacked = false;
    }

    isHit() {
        return this.hit;
    }

    containsShip() {
        return this.containsShip;
    }

    addShip(ship) {
        this.ship = ship;
    }

    getShip() {
        return this.ship;
    }
}
