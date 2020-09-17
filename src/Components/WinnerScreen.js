import React, { useContext, useEffect } from "react";
import { playerTurn } from "./Game";
const WinnerScreen = (props) => {
  return <div>{props.winner ? props.winner : "There's no winner yet..."}</div>;
};

export { WinnerScreen };
