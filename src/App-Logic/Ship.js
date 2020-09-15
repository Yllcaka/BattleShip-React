const Ship = (length) => {
  let theShip = Array(length).fill("Block");
  let shipPosition = [];
  const init = () => [theShip, theShip.length];
  const hit = (point) => {
    if (theShip[point] === "Block") {
      theShip[point] = "Hit";
      return true;
    } else {
      return false;
    }
  };
  const setShipPosition = (newPosition) => {
    let row, column, length;
    row = newPosition.row;
    column = newPosition.column;
    length = theShip.length;
    if (newPosition.flip) {
      for (let i = 0; i < length; i++) {
        shipPosition.push({ row: row + i, column });
      }
    } else {
      for (let i = 0; i < length; i++) {
        shipPosition.push({ row, column: column + i });
      }
    }
    // console.log(shipPosition);
  };
  const getShipPosition = () => shipPosition;
  const isSunk = () => theShip.every((item) => item === "Hit");
  return {
    init,
    hit,
    isSunk,
    setShipPosition,
    getShipPosition,
  };
};

export { Ship };
