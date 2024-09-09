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
        this.populateInfoContainer();
        this.gameContainer = this.generateGameContainer();
        this.populateGameContainer();

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

        const player1Info = this.generatePageElement(
            "div",
            ["player-info", "button"],
            this.infoContainer,
            "Player 1"
        );

        const player2Info = this.generatePageElement(
            "div",
            ["player-info", "button"],
            this.infoContainer,
            "Player 2"
        );
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
        this.clearGameContainer();
        this.populateGameContainer();
    }

    populateGameContainer() {
        //if no game yet, fill blank placeholder grid with no info?
        //TODO: Pull from current Game to get game info and then propagate down the visuals to add elements to the game container
        //call generateBoardContainer for each player
    }

    clearGameContainer() {
        this.gameContainer.replaceChildren();
    }

    createGamePlayers() {
        //asks for user input to create players 1 and 2
    }

    //square to hold both player boards
    generateBoardContainer(player, gameContainer) {
        const playerBoardContainer = this.generatePageElement(
            "div",
            ["player-board-container"],
            this.gameContainer
        );

        this.generatePlayerBoard(player);
    }

    //visual element to display both grids that make up each player board
    generatePlayerBoard(player, boardContainer) {
        this.playerRadar = this.player.playerRadar;
        this.playerMap = this.player.playerMap;

        const playerRadarDiv = this.generatePageElement(
            "div",
            ["player-radar", "game-grid"],
            this.boardContainer
        );

        const playerMapDiv = this.generatePageElement(
            "div",
            ["player-map", "game-grid"],
            this.boardContainer
        );

        this.generateGameGrid(this.playerRadar, playerRadarDiv);
        this.generateGameGrid(this.playerMap, playerMapDiv);
    }

    //create element to display any single grid
    //populated with game squares
    generateGameGrid(gameGrid, gridDiv) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const currentSquare = gameGrid[i][j];
                this.generateGridSquare(currentSquare, gridDiv);
            }
        }
    }

    //update grid visual to display current game state
    updateGameGrid() {}

    //create element to represent a square in a grid
    generateGridSquare(gameSquare, gridDiv) {
        const thisSquare = generatePageElement(
            "div",
            ["game-square"],
            gridDiv,
            `grid square: x-${gameSquare.xCoord}, y-${gameSquare.yCoord}`
        );
    }

    //update grid visual to display current game state
    updateGridSquare() {}

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
