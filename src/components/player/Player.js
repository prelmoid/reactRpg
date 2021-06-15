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
            health: 30,
            maxHealth: 30,
            attack: this.attack,
            attackPower: 11,
            armorRating: 5,
            numberOfMoves: 0,
            numberOfEnemiesKilled: 0,
            lvl: 1,
            experience: 0,
            experienceToNextLevel: 20,
            movePlayer: this.movePlayer,
            dungeonLevel: '1_1',
            dungeonMonsters: Maps['1_1'].monsters.map((monster) => new Monster(monster.type, monster.position)),
            setDungeonLevel: this.setDungeonLevel,
            setPosition: this.setPosition,
            calculateAttackDmg: this.calculateAttackDmg,
            calculateExperienceLevel: this.calculateExperienceLevel,
            moveAllMonsters: this.moveAllMonsters
        }
        
    }

    attack = () => {
        //check if there is a monster around the player
        //find monster north
        let toAttackMonster = this.state.dungeonMonsters.find((monster) => monster.state.position.x === this.state.position.x - 1 && monster.state.position.y === this.state.position.y && monster.state.alive === true)
        if(toAttackMonster) {
            this.attackMonster(toAttackMonster)
            return true;
        }
        //find monster east
        toAttackMonster = this.state.dungeonMonsters.find((monster) => monster.state.position.x === this.state.position.x && monster.state.position.y === this.state.position.y + 1 && monster.state.alive === true)
        if(toAttackMonster) {
            this.attackMonster(toAttackMonster)
            return true;
        }
        //find monster south
        toAttackMonster = this.state.dungeonMonsters.find((monster) => monster.state.position.x === this.state.position.x + 1 && monster.state.position.y === this.state.position.y && monster.state.alive === true)
        if(toAttackMonster) {
            this.attackMonster(toAttackMonster)
            return true;
        }
        //find monster west
        toAttackMonster = this.state.dungeonMonsters.find((monster) => monster.state.position.x === this.state.position.x && monster.state.position.y === this.state.position.y - 1 && monster.state.alive === true)
        if(toAttackMonster) {
            this.attackMonster(toAttackMonster)
            return true;
        }
        return false;
    }

    attackMonster = (monster) => {
        let dmg = this.calculateAttackDmg(this.state.attackPower, monster.state.armorRating);
        //remove monster, if dead
        if(monster.state.health - dmg <= 0) {
            monster.state.alive = false;
            this.setState({numberOfEnemiesKilled: this.state.numberOfEnemiesKilled + 1});
            //calculate experience lvl of player
            this.calculateExperienceLevel(monster.state.experience);
            //calculate gold gained
            this.setState({gold: this.state.gold + monster.state.gold});
        } else {
            //reduce health of monster
            monster.state.health = monster.state.health - dmg
        }
        return;
    }

    calculateExperienceLevel = (gainedExperience) => {
        if(this.state.experience + gainedExperience >= this.state.experienceToNextLevel) {
            //Levelup maxHealth: +15 | attackPower: +5 | armorRating: +1 | experienceToNextLevel: + 10%
            let restExperience = (this.state.experience + gainedExperience) - this.state.experienceToNextLevel;
            this.setState({experience: restExperience,
                            experienceToNextLevel: this.state.experienceToNextLevel + Math.floor(this.state.experienceToNextLevel * 0.3),
                            lvl: this.state.lvl + 1, 
                            maxHealth: this.state.maxHealth + 15, 
                            health: this.state.maxHealth + 15,
                            attackPower: this.state.attackPower + 5,
                            armorRating: this.state.armorRating + 1
                        })
        } else {
            this.setState({experience: this.state.experience + gainedExperience})
        }
        return;
    }

    calculateAttackDmg = (attackPower, armorRating) => {
        //calculate Attackdamage
        //damage = [round]{(attackPower*attackPower)/(attackPower + armorRating of the attacked monster)}
        return Math.round(attackPower*attackPower / (attackPower + armorRating))
    }

    movePlayer = (direction, moveMonsters = true) => {
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
        if(moveMonsters) {
            this.moveAllMonsters();
        }
        return moveCompleted;
    }

    moveAllMonsters = async () => {
        this.state.dungeonMonsters.map((monster) => monster.state.alive ? monster.moveMonster(this.state) : false);
        this.updateMoveNumber();
    }

    updateMoveNumber() {
        let numberOfMoves = this.state.numberOfMoves + 1;
        this.setState({numberOfMoves: numberOfMoves});
    }

    checkPosition = ( position ) => {
        let map = Maps[this.state.dungeonLevel].tiles;
        //check for position is free, and no monster is standing on the ground field
        if(map[position.x][position.y] === 0 && !(this.state.dungeonMonsters.find((monster) => monster.state.position.x === position.x && monster.state.position.y === position.y  && monster.state.alive === true))) { //
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