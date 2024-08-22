export default class Gamegrid {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.gameGrid = generateGridCoordinates();

        return this.gameGrid;
    }

    generateGridCoordinates() {
        const gridRows = [];
        for (let i = 0; i < this.gridSize; i++) {
            const gridRow = [];
            for (let j = 0; j < this.gridSize; j++) {
                const newCoord = this.gridCoordinate(i, j);
                gridRow.push(newCoord);
            }
            gridRows.push(gridRow);
        }
        return gridRows;
    }

    gridCoordinate(xCoord, yCoord) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        const hit = false;
        const ship = false;
    }
}
