import "./Card.css"
import { Draggable } from 'react-beautiful-dnd'

interface CardProps {
  id: string,
  name: string,
  picture: string,
  index: number
}

const Card = ({id, name, picture, index}: CardProps) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className="card">
              <img src={picture} alt={name} height="100px"/>
              <div>
                <span>{name}</span>
              </div>
            </div>
        </li>
        )}
    </Draggable>
  )
}

export default Card