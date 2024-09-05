import Player from "./Player.js";
import Game from "./Game.js";

export default class UserInterface {
    constructor() {
        //create basic webpage layout with graphic representation of both player's game boards

        this.player1 = new Player("player1");
        this.player2 = new Player("player2");
        this.players = [];
        this.players.push(this.player1);
        this.players.push(this.player2);

        this.game = new Game(this.player1, this.player2);

        this.pageBody = document.querySelector("body");
        this.controlContainer = this.generateControlContainer();
        this.populateControlContainer();
        this.infoContainer = this.generateInfoContainer();
        this.gameContainer = this.generateGameContainer();

        /*         const addNewProjectButton = GenerateElement.generatePageElement(
            "div",
            ["nav-new-project-button", "button"],
            navControlContainer,
            "add project"
        );
        addNewProjectButton.addEventListener("click", () => {
            this.createNewProject();
            this.reloadNavContent();
        }); */
    }

    generateControlContainer() {
        return this.generatePageElement(
            "div",
            ["control-container"],
            document.querySelector("body")
        );
    }

    populateControlContainer() {
        //new game button
        const newGameButton = this.generatePageElement(
            "div",
            ["new-game-button", "button"],
            this.controlContainer,
            "new game"
        );
        newGameButton.addEventListener("click", () => {
            this.game.newGame();
        });

        //new player button
        /* const newPlayerButton = this.generatePageElement(
            "div",
            ["new-player-button", "button"],
            this.controlContainer,
            "new player"
        );
        newPlayerButton.addEventListener("click", () => {}); */

        //end game button
        const endGameButton = this.generatePageElement(
            "div",
            ["end-game-button", "button"],
            this.controlContainer,
            "end game"
        );
        endGameButton.addEventListener("click", () => {});

        //create players button
        /* const createPlayersButton = this.generatePageElement(
            "div",
            ["create-players-button", "button"],
            this.controlContainer,
            "create players"
        );
        createPlayersButton.addEventListener("click", () => {}); */
    }

    generateInfoContainer() {
        return this.generatePageElement(
            "div",
            ["info-container"],
            document.querySelector("body")
        );
    }

    populateInfoContainer() {
        //TODO: generate player info with generic player one and player two titles
        //if blank, make blank elements
        //player1 info element
        //player2 info element
    }

    reloadInfoContainer() {
        this.clearInfoContainerContent();
        this.populateInfoContainer();
    }

    clearInfoContainerContent() {
        this.infoContainer.replaceChildren();
    }

    //creates the element that will display both players game boards, as well as the new game, create player
    generateGameContainer() {
        return this.generatePageElement(
            "div",
            ["game-container"],
            document.querySelector("body")
        );
    }

    reloadGameContainerContent() {
        this.clearGameContainerContent();
        this.fillGameContainerContent();
    }

    fillGameContainerContent() {
        //if no game yet, fill blank placeholder grid with no info?
    }

    clearGameContainerContent() {
        this.gameContainer.replaceChildren();
    }

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

export function generatePageElement(
    elementType,
    elementClasses = {},
    parentElement = null,
    elementText = null
) {
    if (elementType == null) {
        return;
    }
    const newElement = document.createElement(elementType);

    if (elementClasses.length > 0) {
        elementClasses.forEach((className) => {
            newElement.classList.add(className);
        });
    }

    if (elementText != null) {
        newElement.textContent = elementText;
    }

    if (parentElement != null) {
        parentElement.appendChild(newElement);
    }

    return newElement;
}
