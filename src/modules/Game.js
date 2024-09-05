import GameBoard from "./GameBoard.js";

//Contains game mechanics
//Facilitates interactions between the players and the GameBoard
export default class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.GameBoard;
        this.attackingPlayer = player1;
        this.playerUnderAttack = player2;
    }

    newGame() {
        this.GameBoard = new GameBoard(player1, player2);

        this.setUpGame();

        while (!this.weHaveAWinner()) {
            this.playerTurn();
        }

        const winnerAndLoser = this.whoWon();
        alert(
            `${winnerAndLoser[0]} has sunk all of ${winnerAndLoser[1]}'s ships! ${winnerAndLoser[0]} is the winner!`
        );
    }

    //creates both players sets of ships and places them on the board
    setUpGame() {
        this.player1.clearShips();
        this.player1.generateShips();
        this.player1.placeShips();

        this.player2.clearShips();
        this.player2.generateShips();
        this.player2.placeShips();
    }

    //check which player turn it is
    //ask that player which grid square to attempt to attack
    //make attack on that square
    playerTurn() {
        //takes an x/y coordinate and attempts to place a torpedo on the opposing players game grid
        //if the coordinate contains a ship, the corresponding ship is marked as hit, as is this square of both the enemy board, and the player board
        //if no ship, mark square on board and pass turn

        const attackerRadar = this.attackingPlayer.radarBoard;
        const mapUnderAttack = this.playerUnderAttack.playerBoard;
        const attackCoordinates = this.whichCoordinateToAttack(mapUnderAttack);

        this.makeAttack(attackCoordinates, attackerRadar, mapUnderAttack);

        this.passTurn();
    }

    //ask player which coordinate to attack
    //checks to make sure that coordinate is within the grid space
    //check to make sure that coordinate has not already been attacked
    //return that grid coordinate to calling function
    whichCoordinateToAttack(mapUnderAttack) {
        const coordinates = [];
        coordinates.push(prompt("Which x coord?"));
        coordinates.push(prompt("Which y coord?"));
        if (
            !mapUnderAttack.legalSquare(coordinates) ||
            mapUnderAttack[coordinates[0]][coordinates[1]].hasBeenAttacked
        ) {
            alert(
                "the coordinates chosen are illegal, or have already been attacked, please choose new coordinates"
            );
            return this.whichCoordinateToAttack();
        }
        return coordinates;
    }

    //mark off attack on both attacker radarBoard and on their opponent game board
    makeAttack(attackCoordinates, attackerRadar, mapUnderAttack) {
        const isAHit = mapUnderAttack.attackSquare(attackCoordinates);

        isAHit
            ? attackerRadar.markHit(attackCoordinates)
            : attackerRadar.markMiss(attackCoordinates);
    }

    //assign attackingPlayer and playerUnderAttack to their new reversed roles
    passTurn() {
        const tookLastTurn = this.attackingPlayer;
        this.attackingPlayer = this.playerUnderAttack;
        this.playerUnderAttack = tookLastTurn;
    }

    //ask player to choose another grid square if they initially chose an illegal one
    chooseAnotherGridSquare() {}

    //notifies player that they have made a hit
    notifyOfHit() {}

    //notifies player that their attack was a miss
    notifyOfMiss() {}

    weHaveAWinner() {
        return this.player1.allShipsSunk() || this.player2.allShipsSunk();
    }

    whoWon() {
        const winnerAndLoser = this.player1.allShipsSunk()
            ? [this.player2, this.player1]
            : [this.player1, this.player2];
        return winnerAndLoser;
    }
}
