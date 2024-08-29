export default class UserInterface {
    constructor() {
        //create basic webpage layout with graphic representation of both player's game boards
    }

    createGamePlayers() {
        //asks for user input to create players 1 and 2
    }
}

class GameContainerVisual {
    //creates the element that will display both players game boards, as well as the new game, create player, and player stats information
}

class GameGridVisual {
    constructor(player) {
        this.player = player;
        this.playerRadar = this.player.playerRadar;
        this.playerBoard = this.player.playerBoard;

        //create visual that will hold both gameboard grid entities

        //TODO: create both grid visual entities and attach them to the game board
    }

    createGridVisual() {}

    displayShip() {}

    displayHit() {}

    displayMiss() {}

    updateGridVisual() {}
}

class GameSquareVisual {
    constructor(parentGrid) {
        //create a square div to visualize that sector of the grid and visually represent it
    }

    displayShip() {}

    displayHit() {}

    displayMiss() {}

    updateGridVisual() {}
}
