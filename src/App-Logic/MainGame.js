import { Player } from "./Player";
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
const mainGame = (() => {
  const players = { player1: Player("John"), player2: Player("Jane") };
  const { player1, player2 } = players;
  const player2Ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  player1.setBoard(Gameboard(10));
  player2.setBoard(Gameboard(10));
  let winner = null;
  const play = () => {
    player1.play();
    player2.play();
    player1.setTurn();
  };
  const checkWinner = () => {
    if (player1.checkIfWon()) winner = player1;
    else if (player2.checkIfWon()) winner = player2;
    return winner;
  };
  const changeTurn = (turn) => {
    if (turn.turn === player1) {
      player1.turnEnd();
      player2.setTurn();
      turn.turn = player2;
    } else {
      player2.turnEnd();
      player1.setTurn();
      turn.turn = player1;
    }
  };
  const getPlayers = () => players;
  const player2Coordinates = [
    [
      { row: 2, column: 2, flip: false },
      { row: 5, column: 6, flip: true },
      { row: 5, column: 2, flip: true },
      { row: 9, column: 3, flip: false },
      { row: 1, column: 7, flip: false },
    ],
    [
      { row: 1, column: 1, flip: true },
      { row: 0, column: 4, flip: false },
      { row: 2, column: 5, flip: true },
      { row: 7, column: 2, flip: false },
      { row: 4, column: 8, flip: true },
    ],
  ];
  const setComputerCordinates = () => {
    let coordinates =
      player2Coordinates[Math.floor(Math.random() * player2Coordinates.length)];
    player2Ships.forEach((ship, index) => {
      player2.insertShip(ship, coordinates[index]);
    });
  };
  return { getPlayers, setComputerCordinates, play, changeTurn, checkWinner };
})();

export { mainGame };
