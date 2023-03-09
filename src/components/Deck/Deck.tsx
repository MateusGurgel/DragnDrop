import "./Deck.css"

import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card";

const bestTools = [
  {
    id: "Discord",
    name: "Discord",
    picture: "later",
  },
  {
    id: "VScode",
    name: "Visual Studio Code",
    picture: "later",
  },
  {
    id: "Firefox",
    name: "Firefox",
    picture: "later",
  },
];

const Home = () => {
  return (
    <div id="deck">
    <Droppable droppableId="droppable">
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          {...provided.innerRef}
        >
          {bestTools.map((tool, index) => (
            <Card
              key={tool.id}
              id={tool.id}
              name={tool.name}
              picture={tool.picture}
              index={index}
            ></Card>
          ))}
        </ul>
      )}
    </Droppable>
    </div>
  );
};

export default Home;
