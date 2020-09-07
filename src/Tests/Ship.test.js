import { Ship } from "../App-Logic/Ship";

it("Should get length", () => {
  const shipTest = Ship(1);
  expect(shipTest.init()).toStrictEqual([["Block"], 1]);
});
it("Should get hit", () => {
  const shipTest = Ship(4);
  shipTest.hit(0);
  shipTest.hit(3);
  expect(shipTest.init()).toStrictEqual([["Hit", "Block", "Block", "Hit"], 4]);
});
it("Should not let already hit blocks be hit again", () => {
  const shipTest = Ship(2);
  shipTest.hit(0);
  expect(shipTest.hit(0)).toBe(false);
});
it("Should Sink", () => {
  const shipTest = Ship(3);
  shipTest.init()[0].forEach((block, index) => shipTest.hit(index));
  expect(shipTest.isSunk()).toBe(true);
});
