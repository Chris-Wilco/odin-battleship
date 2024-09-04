export default class UserInterface {
    constructor() {
        //create basic webpage layout with graphic representation of both player's game boards

        this.generateInfoContainerHeader();
        this.generateGameContainerVisual();
    }

    //create element that holds player stats and info above game play area
    generateInfoContainerHeader() {}

    //creates the element that will display both players game boards, as well as the new game, create player
    generateGameContainerVisual() {}

    createGamePlayers() {
        //asks for user input to create players 1 and 2
    }

    //square to hold both player boards
    generateBoardContainerVisual(players) {
        this.player1 = players[0];
        this.player2 = players[1];
    }

    //visual element to display both grids that make up each player board
    generatePlayerBoardVisual(player, boardContainer) {
        this.player = player;
        this.playerRadar = this.player.playerRadar;
        this.playerBoard = this.player.playerBoard;
    }

    //create element to display any single grid
    //populated with game squares
    generateGameGridVisual(gameGrid) {}

    //update grid visual to display current game state
    updateGridVisual() {}

    //create element to represent a square in a grid
    generateGridSquareVisual(gameSquare) {}

    //update grid visual to display current game state
    updateGridSquareVisual() {}

    //add ship to a single game square
    displayShip(coords) {}

    //add red hit dot to a single game square
    displayHit(coords) {}

    //add white hit dot to a single game square
    displayMiss(coords) {}
}
