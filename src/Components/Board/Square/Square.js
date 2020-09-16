import React, { useState, useContext } from "react";
import { ReactComponent as SquareForm } from "./Square.svg";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
import { playerTurn } from "../../Game";
// import { ShipContext } from "../../Ship/ShipParts";
const Square = (props) => {
  const [type, setType] = useState(props.type);

  const [hit, setHit] = useState(false);
  const changeTurn = useContext(playerTurn);
  // const { markAsInserted } = useContext(ShipContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.SHIP,
    drop: (item, monitor) => {
      const ship = item.ship;
      const flip = item.flip;
      let location = { ...props.location, flip };
      //

      props.player.insertShip(ship, location);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const handleClick = () => {
    const { row, column } = props.location;
    //
    //
    // if (changeTurn.turn) {
    console.log("IT IS HAPPENING");

    // }

    if (props.player.attack(row, column)) {
      // console.log("YEP");
      if (!hit) {
        setHit(true);
        setType(props.player.getBoard()[row][column]);
        changeTurn.changeTurn();
      }
    }
  };

  return (
    <SquareForm
      ref={drop}
      style={isOver ? { borderColor: "green" } : {}}
      className={"square " + (hit ? type : "")}
      onClick={handleClick}
    />
  );
};

export { Square };
