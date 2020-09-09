import { Gameboard } from "../App-Logic/Gameboard";
import { Ship } from "../App-Logic/Ship";
// let board = Gameboard(10);

it("Should replace free blocks with ship blocks", () => {
  let board = Gameboard(10);
  let newShip = Ship(3);
  expect(board.insertShip(newShip, { row: 0, column: 0 })).toBe(true);
  expect(board.getBoard()[0].splice(0, 3)).toStrictEqual([
    "Block",
    "Block",
    "Block",
  ]);
});

it("Ships should not exceed the board length", () => {
  let board = Gameboard(10);
  let newShip = Ship(3);
  expect(board.insertShip(newShip, { row: 1, column: 8 })).toBe(false);
  expect(board.insertShip(newShip, { row: 10, column: 1, flip: true })).toBe(
    false
  );
});
it("Should be able to accept vertical ships", () => {
  let board = Gameboard(3);
  let newShip = Ship(2);
  board.insertShip(newShip, { row: 0, column: 1, flip: true });
  expect(board.getBoard()).toStrictEqual([
    ["0", "Block", "0"],
    ["0", "Block", "0"],
    ["0", "0", "0"],
  ]);
});
it("Should not be able to place ship blocks over ship blocks", () => {
  let board = Gameboard(10);
  let newShip = Ship(3);
  let newBigShip = Ship(5);
  board.insertShip(newShip, { row: 0, column: 0 });
  expect(board.insertShip(newBigShip, { row: 0, column: 2 })).toBe(false);

  expect(board.insertShip(newBigShip, { row: 0, column: 3 })).toBe(true);
  expect(board.insertShip(newBigShip, { row: 0, column: 4, flip: true })).toBe(
    false
  );
});
