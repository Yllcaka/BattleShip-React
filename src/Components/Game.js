import React, { useState, createContext, useContext, useEffect } from "react";
import { Board } from "./Board/Board";
import { Player } from "../App-Logic/Player";
import { Gameboard } from "../App-Logic/Gameboard";
// import { Ship } from "../App-Logic/Ship";
import { SetUpGame } from "./SetUpGame";
import { Ship } from "../App-Logic/Ship";

const player1 = Player("John");
const player2 = Player("Jane");
const playerTurnArgs = {
  turn: true,
};

playerTurnArgs.changeTurn = () => {
  // console.log("CHANGE");
  if (playerTurn.turn) {
    console.log("IF");
    player1.turnEnd();
    player2.setTurn();
  } else {
    console.log("ELSE");
    player2.turnEnd();
    player1.setTurn();
  }
  playerTurnArgs.turn = !playerTurnArgs.turn;
  console.log(playerTurnArgs.turn);
};
const playerTurn = createContext(playerTurnArgs);
player1.setBoard(Gameboard(10));
player2.setBoard(Gameboard(10));
player2.insertShip(Ship(5), { row: 0, column: 0 });
const Game = () => {
  const [begin, setBegin] = useState(false);

  const handleButtonClick = () => {
    setBegin(true);
    player1.play();
    player2.play();
    player1.setTurn();
  };

  if (begin) {
    return (
      <div>
        <div className="game">
          <Board player={player1} />
          <Board player={player2} />
        </div>
        <button
          onClick={() => {
            console.table(player1.getBoard());
            console.table(player2.getBoard());
          }}
        >
          CHECK!
        </button>
      </div>
    );
  }
  return (
    <div>
      <SetUpGame player={player1} />
      <button onClick={handleButtonClick}>Play</button>
    </div>
  );
};

export { Game, playerTurn };
