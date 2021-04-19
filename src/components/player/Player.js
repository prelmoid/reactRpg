import React, { createContext } from 'react';
import { Maps } from '../world/maps/Maps'

export const PlayerContext = createContext();

class PlayerProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {x: 1, y: 1},
            movePlayer: this.movePlayer,
            dungeonLevel: '1_1',
            setDungeonLevel: this.setDungeonLevel
        }
    }

    movePlayer = (direction) => {
        let map = Maps[this.state.dungeonLevel].tiles;
        let moveCompleted = false;
        switch (direction) {
            case 0:
                //check if there's ground
                if (map[this.state.position.x - 1][this.state.position.y] === 0) {
                    this.setState({position: {x: this.state.position.x - 1, y: this.state.position.y}});
                    moveCompleted = true;
                } else {
                    console.log('cant move there');
                }
                break;
            case 1:
                //check if there's ground
                if (map[this.state.position.x][this.state.position.y + 1] === 0) {
                    this.setState({position: {x: this.state.position.x, y: this.state.position.y + 1}});
                    moveCompleted = true;
                } else {
                    console.log('cant move there');
                }
                break;
            case 2: 
                //check if there's ground
                if (map[this.state.position.x + 1][this.state.position.y] === 0) {
                    this.setState({position: {x: this.state.position.x + 1, y: this.state.position.y}});
                    moveCompleted = true;
                } else {
                    console.log('cant move there');
                }
                break;
            case 3:
                //check if there's ground
                if (map[this.state.position.x][this.state.position.y - 1] === 0) {
                    this.setState({position: {x: this.state.position.x, y: this.state.position.y - 1}});
                    moveCompleted = true;
                } else {
                    console.log('cant move there');
                }
                break;
            default:
                console.log('wrong move input');   
        }
        return moveCompleted;
    }

    setPosition = ( position ) => {
        this.setState({position: position});
    };

    setDungeonLevel = ( dungeonMap ) => {
        this.setState({dungeonLevel: dungeonMap});
    }

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