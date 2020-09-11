import React from "react";
import { Square } from "./Square/Square";

const BoardRow = (props) => {
  let squares = props.squares.map((square, index) => (
    <Square
      type={square}
      player={props.player}
      location={{ column: index, row: props.row }}
      key={index}
    />
  ));
  return <div className="board-row">{squares}</div>;
};

export { BoardRow };
