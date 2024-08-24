export default class Ship {
    constructor(shipSize, shipName) {
        this.shipName = shipName;
        this.shipSize = shipSize;
        this.orientationPair;
        this.anchorCoords;

        this.sunk = false;
        this.hits = 0;
    }

    generateCoordinateList(gridStartingPoint) {}

    hit() {
        this.hits++;
        this.sunk = isSunk();
    }

    isSunk() {
        if (this.hits < this.shipSize) {
            return false;
        }
        return true;
    }
}
