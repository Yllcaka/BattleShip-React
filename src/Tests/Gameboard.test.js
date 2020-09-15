import { Gameboard } from "../App-Logic/Gameboard";
import { Ship } from "../App-Logic/Ship";
// const board = Gameboard(10);

it("Should replace free blocks with ship blocks", () => {
  const board = Gameboard(10);
  const newShip = Ship(3);
  expect(board.insertShip(newShip, { row: 0, column: 0 })).toBe(true);
  expect(board.getBoard()[0].splice(0, 3)).toStrictEqual([
    "Block",
    "Block",
    "Block",
  ]);
});

it("Should be able to accept vertical ships", () => {
  const board = Gameboard(3);
  const newShip = Ship(2);
  board.insertShip(newShip, { row: 0, column: 1, flip: true });
  expect(board.getBoard()).toStrictEqual([
    ["0", "Block", "0"],
    ["0", "Block", "0"],
    ["0", "0", "0"],
  ]);
});
it("Ships should not exceed the board length", () => {
  const board = Gameboard(10);
  const newShip = Ship(3);
  expect(board.insertShip(newShip, { row: 1, column: 8 })).toBe(false);
  expect(board.insertShip(newShip, { row: 10, column: 1, flip: true })).toBe(
    false
  );
});

it("Should not be able to place ship blocks over ship blocks", () => {
  const board = Gameboard(10);
  const newShip = Ship(3);
  const newBigShip = Ship(5);
  board.insertShip(newShip, { row: 0, column: 0 });
  expect(board.insertShip(newBigShip, { row: 0, column: 2 })).toBe(false);

  expect(board.insertShip(newBigShip, { row: 0, column: 3 })).toBe(true);
  expect(board.insertShip(newBigShip, { row: 0, column: 4, flip: true })).toBe(
    false
  );
});
it("Should not be able to place the same ship on the board twice", () => {
  const board = Gameboard(2);
  const newShip = Ship(2);
  board.insertShip(newShip, { row: 0, column: 0 });
  board.insertShip(newShip, { row: 1, column: 0 });
  expect(board.getBoard()).toStrictEqual([
    ["Block", "Block"],
    ["0", "0"],
  ]);
});
//When playing the actual game
it("It shouldn't be able to attack if the mode isn't in play mode", () => {
  const board = Gameboard(3);
  const newShip = Ship(2);
  board.insertShip(newShip, { row: 0, column: 1, flip: true });
  expect(board.attackBoard(0, 1)).toBe(false);
  board.play();
  expect(board.attackBoard(0, 1)).toBe(true);
});
it("Should be able to hit boxes", () => {
  const board = Gameboard(3);
  const newShip = Ship(2);
  const newShip3 = Ship(3);
  board.insertShip(newShip, { row: 0, column: 1, flip: true });
  board.insertShip(newShip3, { row: 2, column: 0 });
  board.play();
  board.attackBoard(0, 1);
  expect(board.attackBoard(1, 1)).toBe(true);
  expect(board.attackBoard(1, 1)).toBe(false);
  expect(board.getBoard()).toStrictEqual([
    ["0", "Hit", "0"],
    ["0", "Hit", "0"],
    ["Block", "Block", "Block"],
  ]);
  expect(newShip.isSunk()).toBe(true);
});

it("If no ships left it gameOver should return true", () => {
  const board = Gameboard(3);
  const newShip = Ship(2);
  board.insertShip(newShip, { row: 0, column: 1, flip: true });
  board.play();
  board.attackBoard(0, 1);
  board.attackBoard(1, 1);

  expect(board.gameOver()).toBe(true);
});
it("Should not be able to place ship at the end of other ship", () => {
  const board = Gameboard(3);
  const newShip = Ship(2);
  const newShip2 = Ship(2);
  const newShip3 = Ship(2);
  board.insertShip(newShip, { row: 0, column: 1 });
  board.insertShip(newShip2, { row: 1, column: 0, flip: true });
  expect(board.insertShip(newShip3, { row: 3, column: 0, flip: true })).toBe(
    false
  );
  board.play();
  board.attackBoard(0, 1);
  board.attackBoard(1, 1);

  // expect(board.gameOver()).toBe(true);
});
