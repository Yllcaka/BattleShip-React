// import { Ship } from "./Ship";

const Gameboard = (boardLength) => {
  let board = Array(boardLength).fill(Array(boardLength).fill("0"));
  let shipsOnBoard = [];
  const insertShip = (ship, location) => {
    //Insert ship in the board
    if (location.flip === true) return insertVertically({ ship, location });
    else {
      return insertHorizontally({ ship, location });
    }
  };
  const insertHorizontally = (content) => {
    const location = content.location;
    const ship = content.ship;
    let row, column;
    row = location.row;
    column = location.column;
    let [theShip, shipLength] = ship.init();
    let boardRow = [...board[row]];
    let desiredPlace = boardRow.slice(column, shipLength);
    boardRow.splice(column, shipLength, ...theShip);

    if (!desiredPlace.includes("Block") && boardRow.length === boardLength) {
      //Check if the boat exceeds the board or it already contains it
      board[row] = boardRow;
    } else {
      return false;
    }
    shipsOnBoard.push(ship);
    return true;
  };

  const insertVertically = (content) => {
    const ship = content.ship;
    let row, column, validLength;
    row = content.location.row;
    column = content.location.column;
    let [theShip, shipLength] = ship.init();
    validLength = true;
    //The magic happens here

    var boardColumn = board.map((item) => item[column]);
    boardColumn.splice(row, shipLength, ...theShip);
    let futureBoard = board.map((item, index) => {
      let shipPart = boardColumn[index];
      let boardRow = [...item];
      if (shipPart) {
        boardRow[column] = shipPart;
      }
      if (
        boardRow.length !== boardLength ||
        boardColumn.length !== boardLength
      ) {
        validLength = false;
      }
      return boardRow;
    });
    if (futureBoard.length !== boardLength) {
      return false;
    }
    if (!validLength) {
      return validLength;
    }
    board = futureBoard;
    // console.table(futureBoard);
    return true;
  };
  let getBoard = () => board;
  return {
    getBoard,
    insertShip,
  };
};

export { Gameboard };
