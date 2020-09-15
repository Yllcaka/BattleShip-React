import React from "react";
import { NavBar } from "./NavBar";
import { Game } from "./Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const App = () => {
  return (
    <div>
      <NavBar />
      <DndProvider backend={HTML5Backend}>
        <Game />
      </DndProvider>
    </div>
  );
};

export { App };
