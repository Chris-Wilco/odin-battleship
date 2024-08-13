export default class Ship {
    constructor(shipSize, shipOrientation, gridStartingPoint) {
        this.shipSize = shipSize;
        this.shipOrientation = shipOrientation;
        this.gridStartingPoint = gridStartingPoint;
        this.shipCoordinates = [];
        this.sunk = false;
    }

    generateCoordinateList(gridStartingPoint) {}

    placeShip() {}
}
