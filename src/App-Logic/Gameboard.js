// import { Ship } from "./Ship";

const Gameboard = (boardLength) => {
  let board = Array(boardLength).fill(Array(boardLength).fill("0"));
  let shipsOnBoard = [];
  const insertShip = (ship, location) => {
    if (location.flip === true) insertVertically({ ship, location });
    else {
      return insertHorizontally({ ship, location });
    }
    //Insert ship in the board
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
    // console.table(board);
    shipsOnBoard.push(ship);
    return true;
  };
  const insertVertically = (content) => {
    const location = content.location;
    const ship = content.ship;
    let row, column;
    row = location.row;
    column = location.column;
    let [theShip, shipLength] = ship.init();

    //The magic happens here

    var boardColumn = board.map((item) => item[column]);
    boardColumn.splice(row, shipLength, ...theShip);

    let futureBoard = board.map((item, index) => {
      let shipPart = theShip[index];
      if (shipPart) item[column] = shipPart;
      return item;
    });
    console.table(futureBoard);
  };
  let getBoard = () => board;
  return {
    getBoard,
    insertShip,
  };
};

export { Gameboard };
