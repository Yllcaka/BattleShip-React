import React, { useState, createContext, useContext, useEffect } from "react";
import { mainGame } from "../App-Logic/MainGame";
import { Board } from "./Board/Board";
import { SetUpGame } from "./SetUpGame";
import { WinnerScreen } from "./WinnerScreen";

mainGame.setComputerCordinates();
const { player1, player2 } = mainGame.getPlayers();
// const playerTurnArgs = ;

// playerTurnArgs.setTurn = () => {
//   mainGame.changeTurn(playerTurnArgs);
//   // console.log(playerTurnArgs.turn);
//   // console.log(playerTurnArgs.turn);
// };
// playerTurnArgs.checkWinner = () => {
//   mainGame.checkWinner();
// };
// const playerTurn = createContext({
//   turn: ,
//   setTurn: () => {},
// });

const Game = () => {
  const [begin, setBegin] = useState(false);

  const handleButtonClick = () => {
    setBegin(true);
    mainGame.play();
  };

  if (begin) {
    return (
      <div>
        <div className="game">
          <Board player={player1} />
          <Board player={player2} />
        </div>
        {/* <button
          onClick={() => {
            console.table(player1.getBoard());
            console.table(player2.getBoard());
          }}
        >
          CHECK!
        </button> */}
        <WinnerScreen />
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
