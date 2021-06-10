import React, { createContext } from 'react';
import { Maps } from '../world/maps/Maps'
import PlayerName from './PlayerName';


export const PlayerContext = createContext();

class PlayerProvider extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: {x: 1, y: 1},
            movePlayer: this.movePlayer,
            dungeonLevel: '1_1',
            setDungeonLevel: this.setDungeonLevel,
            setPosition: this.setPosition
        }
    }

    movePlayer = (direction) => {
        let position;
        let moveCompleted = false;
        switch (direction) {
            case 0:
                //check if there's ground
                position = {x: this.state.position.x - 1, y: this.state.position.y};
                moveCompleted = this.checkPosition(position);
                break;
            case 1:
                //check if there's ground
                position = {x: this.state.position.x, y: this.state.position.y + 1};
                moveCompleted = this.checkPosition(position);
                break;
            case 2: 
                //check if there's ground
                position = {x: this.state.position.x + 1, y: this.state.position.y};
                moveCompleted = this.checkPosition(position);
                break;
            case 3:
                //check if there's ground
                position = {x: this.state.position.x, y: this.state.position.y - 1};
                moveCompleted = this.checkPosition(position);
                break;
            default:
                console.log('wrong move input');   
        }
        return moveCompleted;
    }

    checkPosition = ( position ) => {
        let map = Maps[this.state.dungeonLevel].tiles;
        if(map[position.x][position.y] === 0) {
            this.setPosition(position);
            return true;
        }
        console.log('cant move there');
        return false;
    }

    setPosition = ( position ) => {
        this.setState({position: position});
    };

    setDungeonLevel = ( dungeonMap ) => {
        this.setState({dungeonLevel: dungeonMap});
        console.log(this.state.dungeonLevel);
    }

    setPlayerName(name) {
        this.setState({name: name});
    }

    render () {
        const { children } = this.props;
        return (
            <PlayerContext.Provider value={this.state}>
                {
                    this.state.name === '' ?
                    <div>
                        <PlayerName
                            send={(prop) => {
                                this.setPlayerName(prop)
                                console.log(prop)
                            }}
                            />
                    </div>
                    :
                    <div>Playername: {this.state.name}</div>
                }
                    {children}
                <div> test</div>
            </PlayerContext.Provider>
        );
    }
}

export {PlayerProvider}