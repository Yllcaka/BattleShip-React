import React, { useState } from "react";
import { Board } from "./Board/Board";
// import { Player } from "../App-Logic/Player";
// import { Gameboard } from "../App-Logic/Gameboard";
// import { Ship } from "../App-Logic/Ship";
import { ShipParts, ShipContext } from "../Components/Ship/ShipParts";
const SetUpGame = (props) => {
  const player = props.player;
  const [flip, setFlip] = useState(false);
  const handleClick = () => {
    setFlip(!flip);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div className="game">
        <Board player={player} />
      </div>
      <div>
        <div className={"ship-container " + (flip ? "flip" : "")}>
          {/* <ShipContext.Provider> */}
          <ShipParts flip={flip} ship={5} key={1} />
          <ShipParts flip={flip} ship={4} key={2} />
          <ShipParts flip={flip} ship={3} key={3} />
          <ShipParts flip={flip} ship={3} key={4} />
          <ShipParts flip={flip} ship={2} key={5} />
          {/* </ShipContext.Provider> */}
        </div>
        <button onClick={handleClick}>Flip</button>
      </div>
    </div>
  );
};

export { SetUpGame };
