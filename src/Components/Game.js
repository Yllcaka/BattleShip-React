import React from "react";
import { Board } from "./Board/Board";
import { Player } from "../App-Logic/Player";
import { Gameboard } from "../App-Logic/Gameboard";
import { Ship } from "../App-Logic/Ship";
const Game = () => {
  const player1 = Player("John");
  const player2 = Player("Jane");
  player1.setBoard(Gameboard(10));
  player2.setBoard(Gameboard(10));
  player1.insertShip(Ship(2), { row: 1, column: 0, flip: true });
  return (
    <div className="game">
      <Board player={player1} />
      {/* <Board /> */}
    </div>
  );
};

export { Game };
