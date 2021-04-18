import React, { useState, createContext } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = props => {
    const [player, setPosition] = useState ([
        {
            positionX: 1,
            positionY: 1,
        },
    ]);

    return (
        <PlayerContext.Provider value={[player, setPosition]}>
             {props.children}
        </PlayerContext.Provider>
    );
}
