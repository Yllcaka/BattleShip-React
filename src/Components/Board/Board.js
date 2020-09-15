import React, { useState } from "react";
import { BoardRow } from "./BoardRow";
const Board = (props) => {
  let board = props.player.getBoard();
  //   props.player.attack(1, 0);
  //   props.player.attack(1, 1);
  //

  //   a[0][2] = "Block";

  let boardRows = board.map((row, index) => (
    <BoardRow
      // flip={props.flip}
      player={props.player}
      squares={row}
      row={index}
      key={index}
    />
  ));
  return <div className="board">{boardRows}</div>;
};

export { Board };
