import React from 'react'
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
            <div>
              <span>{name}</span>
            </div>
        </li>
        )}
    </Draggable>
  )
}

export default Card