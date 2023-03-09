import "./Deck.css"

import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card";

type Card = {
  id: string,
  name: string,
  picture: string,
}

interface DeckProps{
  cards: Card[]
}

const Deck = ({cards}: DeckProps) => {
  return (
    <div id="deck">
    <Droppable droppableId="droppable">
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          {...provided.innerRef}
        >
          {cards.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              picture={card.picture}
              index={index}
            ></Card>
          ))}
        </ul>
      )}
    </Droppable>
    </div>
  );
};

export default Deck;
