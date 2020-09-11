import { Player } from "../App-Logic/Player";
import { Gameboard } from "../App-Logic/Gameboard";
import { Ship } from "../App-Logic/Ship";

// it("Should be able to insert ships into it's board", () => {});
it("Players should end turn when it fires a ship", () => {
  const player1 = Player("John");
  player1.setBoard(Gameboard(3));
  player1.insertShip(Ship(2), { row: 1, column: 1, flip: true });
  player1.attack(0, 0);
  expect(player1.turnEnd()).toBe(true);
});
it("Should declare the player a winner if the board doesn't contain anymore ships", () => {
  const player1 = Player("John");
  player1.setBoard(Gameboard(3));
  player1.insertShip(Ship(2), { row: 1, column: 1, flip: true });
  player1.attack(1, 1);
  player1.attack(2, 1);
  expect(player1.checkIfWon()).toBe(true);
});
