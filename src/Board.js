import React from 'react';
import Square from './Square';
import Bishop from './Bishop';

function renderSquare(x, y, [bishopX, bishopY]) {
    const black = (x + y) % 2 === 1;
    const isBishopHere = bishopX === x && bishopY === y;
    const piece = isBishopHere ? <Bishop /> : null;

    return <Square black={black}>{piece}</Square>
}

export default function Board({ bishopPos }) {
    return (
    <div
        style={{
            width: '100%',
            height: '100%'
        }}
    >
        {renderSquare(0, 0, bishopPos)}
        {renderSquare(1, 0, bishopPos)}
        {renderSquare(2, 0, bishopPos)}
    </div>
    )
}