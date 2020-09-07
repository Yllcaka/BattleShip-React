const Ship = (length) => {
  let theShip = Array(length).fill("Block");
  const init = () => [theShip, theShip.length];
  const hit = (point) => {
    if (theShip[point] === "Block") {
      theShip[point] = "Hit";
      return true;
    } else {
      return false;
    }
  };
  const isSunk = () => theShip.every((item) => item === "Hit");
  return {
    init,
    length,
    hit,
    isSunk,
  };
};

export { Ship };
