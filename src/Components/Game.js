import React, { useState } from "react";
import { Board } from "./Board/Board";
import { Player } from "../App-Logic/Player";
import { Gameboard } from "../App-Logic/Gameboard";
// import { Ship } from "../App-Logic/Ship";
import { SetUpGame } from "./SetUpGame";

const player1 = Player("John");
const player2 = Player("Jane");
player1.setBoard(Gameboard(10));
player2.setBoard(Gameboard(10));
const Game = () => {
  const [begin, setBegin] = useState(false);

  const handleButtonClick = () => {
    setBegin(true);
    player1.play();
    console.table(player1.getBoard());
  };

  if (begin) {
    return (
      <div>
        <div className="game">
          <Board player={player1} />
          <Board player={player2} />
        </div>
        <button onClick={() => console.table(player1.getBoard())}>
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

export { Game };
