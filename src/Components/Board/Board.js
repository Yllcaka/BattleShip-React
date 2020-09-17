import React from "react";
import { BoardRow } from "./BoardRow";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";
const Board = (props) => {
  let board = props.player.getBoard();
  let boardRows = board.map((row, index) => (
    <BoardRow player={props.player} squares={row} row={index} key={index} />
  ));
  return <div className="board">{boardRows}</div>;
};

export { Board };
