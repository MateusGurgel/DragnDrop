import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import "./App.css";
import Deck from "./components/Deck/Deck";

const bestApps = [
  {
    id: "Discord",
    name: "Discord",
    picture: "pictures/discord.png",
  },
  {
    id: "VScode",
    name: "Visual Studio Code",
    picture: "pictures/vscode.jpg",
  },
  {
    id: "Firefox",
    name: "Firefox",
    picture: "pictures/Firefox.png",
  },
];

function App() {

  const [apps, setApps] = useState(bestApps)

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = apps;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setApps(items);
  }

  return (
    <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
      <div id="container">
        <Deck cards={apps}/>
      </div>
    </DragDropContext>
  );
}

export default App;
