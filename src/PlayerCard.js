import React from 'react'
import { useDrag } from 'react-dnd'

export const PlayerCard = ({ id, name }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'player',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='player-card' ref={dragRef}>
            {name}
            {isDragging && '😱'}
        </div>
    )
};