import React, { createContext } from 'react';
import { Maps } from '../world/maps/Maps';
import PlayerName from './PlayerName';
import './Player.css';
import Monster from '../monsters/Monster';

export const PlayerContext = createContext();

class PlayerProvider extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: {x: 1, y: 1},
            gold: 10,
            health: 20,
            maxHealth: 20,
            attackPower: 4,
            armorRating: 2,
            numberOfMoves: 0,
            lvl: 1,
            experience: 0,
            experienceToNextLevel: 20,
            movePlayer: this.movePlayer,
            dungeonLevel: '1_1',
            dungeonMonsters: Maps['1_1'].monsters.map((monster) => new Monster(monster.type, monster.position)),
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
        //if the player made a move (either he could walk or not) the monsters get to make their move
        this.moveAllMonsters();
        return moveCompleted;
    }

    moveAllMonsters = async () => {
        const response = this.state.dungeonMonsters.map((monster) => monster.moveMonster(this.state.position, this.state.dungeonMonsters));
        this.updateMoveNumber();
    }

    updateMoveNumber() {
        let numberOfMoves = this.state.numberOfMoves + 1;
        this.setState({numberOfMoves: numberOfMoves});
    }

    checkPosition = ( position ) => {
        let map = Maps[this.state.dungeonLevel].tiles;
        //check for position is free, and no monster is standing on the ground field
        if(map[position.x][position.y] === 0 && !(this.state.dungeonMonsters.find((monster) => monster.state.position.x === position.x && monster.state.position.y === position.y))) { //
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
        this.setState({dungeonMonsters: Maps[dungeonMap].monsters})
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
                    <div className='PlayerName'>
                        <PlayerName
                            send={(prop) => {
                                this.setPlayerName(prop)
                            }}
                            />
                    </div>
                    :
                    <div className='PlayerName'>Playername: {this.state.name}</div>
                }
                    {children}
            </PlayerContext.Provider>
        );
    }
}

export {PlayerProvider}