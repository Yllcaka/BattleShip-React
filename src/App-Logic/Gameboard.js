// import { Ship } from "./Ship";

const Gameboard = (boardLength) => {
  let board = Array(10);
  for (let i = 0; i < boardLength; i++) {
    board[i] = [];
    for (let j = 0; j < boardLength; j++) {
      board[i][j] = "0";
    }
  }
  let shipsOnBoard = [];
  let playMode = false;
  const insertShip = (ship, location) => {
    //Insert ship in the board
    if (shipsOnBoard.includes(ship)) return false;
    if (location.flip === true) return insertVertically({ ship, location });
    else {
      return insertHorizontally({ ship, location });
    }
  };
  const insertHorizontally = (content) => {
    //Inserts the ship horizontally

    const location = content.location;
    const ship = content.ship;
    let row, column;
    row = location.row;
    column = location.column;

    let [theShip, shipLength] = ship.init(); // The ship parameters
    let boardRow = [...board[row]]; //Get the row that the ship will be on
    let desiredPlace = boardRow.slice(column, shipLength + column); // The place where the ship will be
    boardRow.splice(column, shipLength, ...theShip);

    if (!desiredPlace.includes("Block") && boardRow.length === boardLength) {
      //Check if the boat exceeds the board or it already contains a ship
      board[row] = boardRow;
    } else {
      return false;
    }
    ship.setShipPosition({ row, column });
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

    let boardColumn = board.map((item) => item[column]);
    //

    if (boardColumn.slice(row, shipLength + row).includes("Block")) {
      //If there's already a boat on that place don't place the boat
      return false;
    }
    boardColumn.splice(row, shipLength, ...theShip);

    let futureBoard = board.map((boardRow, index) => {
      let shipPart = boardColumn[index];
      // let boardRow = [...item];
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
    ship.setShipPosition({ row, column, flip: true });
    shipsOnBoard.push(ship);

    return true;
  };
  const gameOver = () => !shipsOnBoard || !shipsOnBoard.length;
  const getBoard = () => {
    return board;
  };
  const attackBoard = (row, column) => {
    if (!playMode) {
      return false;
    }
    if (board[row][column] === "Block") {
      board[row][column] = "Hit";
      shipsOnBoard.forEach((ship, pos) => {
        ship.getShipPosition().forEach((block, index) => {
          if (block.row === row && block.column === column) {
            ship.hit(index);
          }
        });
        if (ship.isSunk()) shipsOnBoard.splice(pos, 1);
      });
    } else if (board[row][column] === "Hit" || board[row][column] === "miss") {
      return false;
    } else {
      board[row].splice(column, 1, "miss");
    }
    // gameOver();

    return true;
  };
  const play = () => (playMode = true);

  return {
    getBoard,
    insertShip,
    attackBoard,
    gameOver,
    play,
  };
};

export { Gameboard };
