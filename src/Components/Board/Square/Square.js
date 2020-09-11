import React, { useState } from "react";
import { ReactComponent as SquareForm } from "./Square.svg";
const Square = (props) => {
  const [type, setType] = useState(props.type);
  const [hit, setHit] = useState(false);
  const handleClick = () => {
    const { row, column } = props.location;

    console.log(row, column);
    if (props.player.attack(row, column)) console.log("YOU WON");
    if (!hit) setHit(true);
    setType(props.player.getBoard()[row][column]);
  };
  return (
    <SquareForm
      className={"square " + (hit ? type : "")}
      onClick={handleClick}
    />
  );
};

export { Square };
