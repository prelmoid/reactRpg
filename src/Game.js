import React from 'react';
import { PlayerContext } from './components/player/Player';
import World from './components/world/World';

class Game extends React.Component{
    static contextType = PlayerContext;
    checkEvent = (e) => {
        
        switch (e.key) {
            case 'w':
            case 'ArrowUp':
                console.log("NORTH");
                this.context.setPosition({x: 2, y: 2});
                console.log(this.context);
                //console.log(this.context[0][0]['positionX']+1);
                break;
            case 's':
            case 'ArrowDown':
                console.log("SOUTH");
                break;
            case 'a':
            case 'ArrowLeft':
                console.log("WEST");
                break;
            case 'd':
            case 'ArrowRight':
                console.log("EAST");
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