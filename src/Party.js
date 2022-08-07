import React, { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd';
import { PlayerCard } from './PlayerCard';
// import { listStyle as style } from './style';

const PLAYERS = [
    { id: 1, name: 'Care' },
    { id: 2, name: 'Banme' },
    { id: 3, name: 'Sb' },
    { id: 4, name: 'Tentussy' },
];

export const Party = () => {

    const [players, setPlayers] = useState(PLAYERS);

    const movePlayerListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = players[dragIndex];
            const hoverItem = players[hoverIndex];
            // swap dragItem and hoverItem in players array
            setPlayers(players => {
                const updatedPlayers = [...players];
                updatedPlayers[dragIndex] = hoverItem;
                updatedPlayers[hoverIndex] = dragItem;
                return updatedPlayers;
            });
        },
        [players],
    );

    // nyi
    // style={style}
    return(
        <div>
            {players.map((player, index) => {
                <PlayerCard
                    key={player.id}
                    index={index}
                    text={player.name}
                    moveListItem={movePlayerListItem}
                />
            })}
        </div>
    );
};