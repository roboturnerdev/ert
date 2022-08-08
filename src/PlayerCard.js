import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './style.css';

export const PlayerCard = ({ text, index, moveListItem }) => {

    // useDrag - the item is draggable
    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    // useDrop - list item is also a drop area
    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    // join the 2 refs together into one (both draggable and can be dropped on)
    const ref = useRef(null);
    const dragDropRef = dragRef(dropRef(ref));

    // make items being dragged transparent
    const opacity = isDragging ? 0 : 1;

    //  style={{ ...style, opacity }}
    // need to put something together for style
    return (
        <div ref={dragDropRef} className="player">
            {text}
        </div>
    )
};