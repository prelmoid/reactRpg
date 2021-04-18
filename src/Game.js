import React from 'react';
import World from './components/world/World';

class Game extends React.Component {
    
    render () {
        return (
            <main className="App-main">
 
                <World />
            </main>
        );
    }
}

export default Game;