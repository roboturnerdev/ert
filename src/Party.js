import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { PlayerCard } from './PlayerCard';

const PLAYERS = [
    { id: 1, name: 'Care' },
    { id: 2, name: 'Banme' },
    { id: 3, name: 'Sb' },
    { id: 4, name: 'Tentussy' },
]

export const Party = () => {
    const [party, setParty] = useState([])
    const [{ isOver }, dropRef] = useDrop({
        accept: 'player',
        drop: (item) => setParty((party) =>
                            !party.includes(item) ? [...party, item] : party),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <React.Fragment>
            <div className='players'>
                {PLAYERS.map(player => <PlayerCard draggable id={player.id} name={player.name} />)}
            </div>
            <div className='party' ref={dropRef}>
                {party.map(player => <PlayerCard id={player.id} name={player.name} />)}
                {isOver && <div>Add to Party</div>}
            </div>
        </React.Fragment>
    )
}