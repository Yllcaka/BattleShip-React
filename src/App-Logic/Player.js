const Player = (name = "Player") => {
  let board, playersTurn;

  const setBoard = (newBoard) => (board = newBoard);
  const getBoard = () => board.getBoard();
  const setTurn = () => (playersTurn = true);
  const getName = () => name;
  const insertShip = (ship, location) => board.insertShip(ship, location);
  const attack = (row, col) => {
    // if (checkIfWon()) return true;
    if (playersTurn && board.attackBoard(row, col)) {
      playersTurn = false;
      return true;
    }
    return false;
  };
  const checkIfWon = () => board.gameOver();
  const play = () => board.play();
  const turnEnd = () => (playersTurn = false);
  return {
    getName,
    setBoard,
    getBoard,
    insertShip,
    attack,
    checkIfWon,
    turnEnd,
    setTurn,
    play,
  };
};

export { Player };
