export default class Gamegrid {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.gameGrid = generateGridSquares();
        this.cardinalRef = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        return this.gameGrid;
    }

    generateGridSquares() {
        const gridRows = [];
        for (let i = 0; i < this.gridSize; i++) {
            const gridRow = [];
            for (let j = 0; j < this.gridSize; j++) {
                const newCoord = new GridSquare(i, j);
                gridRow.push(newCoord);
            }
            gridRows.push(gridRow);
        }
        return gridRows;
    }

    legalSquare(xCoord, yCoord) {
        return this.goodCoord(xCoord) && this.goodCoord(yCoord);
    }

    goodCoord(coord) {
        if (coord >= 0 && coord < this.gridSize) {
            return true;
        }
        return false;
    }

    legalShipPlacement(xCoord, yCoord, orientationPair, shipToPlace) {
        for (let i = 0; i < shipToPlace.shipSize; i++) {
            const thisX = xCoord + i * orientationPair[0];
            const thisY = yCoord + i * orientationPair[1];
            if (
                !this.legalSquare(thisX, thisY) ||
                this.alreadyAShipThere(thisX, thisY)
            ) {
                return false;
            }
        }

        return true;
    }

    alreadyAShipThere(xCoord, yCoord) {
        return this.gameGrid[xCoord][yCoord].containsShip();
    }

    placeShip(xCoord, yCoord, orientationPair, shipToPlace) {
        if (
            !this.legalShipPlacement(
                xCoord,
                yCoord,
                orientationPair,
                shipToPlace
            )
        ) {
            return false;
        }
        for (let i = 0; i < shipToPlace.shipSize; i++) {
            const thisX = xCoord + i * orientationPair[0];
            const thisY = yCoord + i * orientationPair[1];

            this.gameGrid[thisX][thisY].containsShip = true;
            this.gameGrid[thisX][thisY].ship = shipToPlace;
        }
        shipToPlace.anchorCoords = [xCoord, yCoord];
        shipToPlace.orientationPair = orientationPair;
    }
}

export class GridSquare {
    constructor(xCoord, yCoord) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.hit = false;
        this.containsShip = false;
        this.ship;
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
