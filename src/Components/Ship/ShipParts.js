import React, { useState, createContext } from "react";
import { Ship } from "../../App-Logic/Ship";
import { useDrag } from "react-dnd";
import { Part } from "./Part";
import { ItemTypes } from "../utils/items";

const ShipContext = createContext({
  inserted: null,
});

const ShipParts = (props) => {
  const ship = Ship(props.ship);
  const [shipParts, shipLength] = ship.init();

  // const [inserted, setInserted] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.SHIP,
      ship: ship,
      flip: props.flip,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const theShip = shipParts.map((part, index) => (
    <Part block={part} key={index} />
  ));
  return (
    <div
      ref={drag}
      className="ship"
      draggable="true"
      style={isDragging ? { opacity: "0.5" } : {}}
    >
      {theShip}
    </div>
  );
};

export { ShipParts, ShipContext };
