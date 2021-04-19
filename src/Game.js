import React from 'react';
import { PlayerContext } from './components/player/Player';
import World from './components/world/World';
import { directions } from './components/Enums'

class Game extends React.Component{
    static contextType = PlayerContext;
    checkEvent = (e) => {
        
        switch (e.key) {
            case 'w':
            case 'ArrowUp':
                this.context.movePlayer(directions.NORTH);
                break;
            case 's':
            case 'ArrowDown':
                this.context.movePlayer(directions.SOUTH);

                break;
            case 'a':
            case 'ArrowLeft':
                this.context.movePlayer(directions.WEST);
                break;
            case 'd':
            case 'ArrowRight':
                this.context.movePlayer(directions.EAST);
                break;
            default:
                console.log("nothing to do with this key");

        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.checkEvent);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.checkEvent);
    }

    render () {
        return (
            <main className="App-main">
 
                <World />
            </main>
        );
    }
}

export default Game;