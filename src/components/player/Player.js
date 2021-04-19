import React, { createContext } from 'react';

export const PlayerContext = createContext();

class PlayerProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {x: 1, y: 1},
            movePlayer: this.movePlayer
        }
    }

    movePlayer = (direction) => {
        console.log(direction);
    }

    setPosition = ( position ) => {
        this.setState({position: position});
    };

    render () {
        const { children } = this.props;
        return (
            <PlayerContext.Provider value={this.state}>
                 {children}
            </PlayerContext.Provider>
        );
    }
}

export {PlayerProvider}