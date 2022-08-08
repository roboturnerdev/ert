import React from 'react';
import Square from './Square';
import Bishop from './Bishop';

function renderSquare(i, [bishopX, bishopY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isBishopHere = x === bishopX && y === bishopY;
    const black = (x + y) % 2 === 1;
    const piece = isBishopHere ? <Bishop /> : null;

    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Square black={black}>{piece}</Square>
        </div>
    )
};

export default function Board({ bishopPos }) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, bishopPos));
    };

    return (
    <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}
    >
        {squares}
    </div>
    )
}