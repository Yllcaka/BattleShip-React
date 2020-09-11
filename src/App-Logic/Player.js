const Player = (name = "Player") => {
  let board, playersTurn;

  const setBoard = (newBoard) => (board = newBoard);
  const getBoard = () => board.getBoard();
  const setTurn = () => (playersTurn = true);
  const getName = () => name;
  const insertShip = (ship, location) => board.insertShip(ship, location);
  const attack = (row, col) => {
    if (checkIfWon()) return true;
    if (board.attackBoard(row, col)) {
      playersTurn = false;
    }
  };
  const checkIfWon = () => board.gameOver();
  const turnEnd = () => !playersTurn;
  return {
    getName,
    setBoard,
    getBoard,
    insertShip,
    attack,
    checkIfWon,
    turnEnd,
    setTurn,
  };
};

export { Player };
