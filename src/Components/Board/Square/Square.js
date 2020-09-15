import React, { useState, useContext } from "react";
import { ReactComponent as SquareForm } from "./Square.svg";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
import { ShipContext } from "../../Ship/ShipParts";
const Square = (props) => {
  const [type, setType] = useState(props.type);

  const [hit, setHit] = useState(false);
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

    if (props.player.attack(row, column)) {
      console.log("!@#");
      if (!hit) setHit(true);
      setType(props.player.getBoard()[row][column]);
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
