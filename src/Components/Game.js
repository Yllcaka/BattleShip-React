import React, { useState, createContext, useContext, useEffect } from "react";
import { Board } from "./Board/Board";
import { SetUpGame } from "./SetUpGame";
import { mainGame } from "../App-Logic/MainGame";

mainGame.setComputerCordinates();
const { player1, player2 } = mainGame.getPlayers();
const playerTurnArgs = {
  turn: player1,
};

playerTurnArgs.changeTurn = () => {
  mainGame.changeTurn(playerTurnArgs);
  // console.log(playerTurnArgs.turn);
};
const playerTurn = createContext(playerTurnArgs);

mainGame.play();
const Game = () => {
  const [begin, setBegin] = useState(false);

  const handleButtonClick = () => {
    setBegin(true);
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
        <div>{}</div>
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
