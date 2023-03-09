import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./App.css";
import Deck from "./components/Deck/Deck";



function App() {
  return (
    <DragDropContext onDragEnd={(result, provided) => {}}>
      <div id="container">
        <Deck />
      </div>
    </DragDropContext>
  );
}

export default App;
