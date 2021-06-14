import React from 'react';
import { directions } from '../Enums'
import { Maps } from '../world/maps/Maps';

class Monster extends React.Component {
    constructor(type, position) {
        super();
        this.state = {
            type: type,
            position: position,
            health: 20,
            attackPower: 4,
            armorRating: 2,
            experience: 5,
            moveMonster: this.moveMonster,
            setPosition: this.setPosition
        }
    }

    moveMonster = (playerState, direction = null) => {
        let position;
        let moveCompleted = false;
        //if no direction is indicated for the monster, use a random direction from the enum
        if(!direction){
            direction = Math.floor(Math.random() * (Object.keys(directions).length));
        }
        
        switch (direction) {
            case 0:
                //check if there's ground
                position = {x: this.state.position.x - 1, y: this.state.position.y};
                moveCompleted = this.checkPosition(position, playerState);
                break;
            case 1:
                //check if there's ground
                position = {x: this.state.position.x, y: this.state.position.y + 1};
                moveCompleted = this.checkPosition(position, playerState);
                break;
            case 2: 
                //check if there's ground
                position = {x: this.state.position.x + 1, y: this.state.position.y};
                moveCompleted = this.checkPosition(position, playerState);
                break;
            case 3:
                //check if there's ground
                position = {x: this.state.position.x, y: this.state.position.y - 1};
                moveCompleted = this.checkPosition(position, playerState);
                break;
            default:
                console.log('wrong move input monster');   
        }
        return moveCompleted;
    }

    checkPosition = ( position, playerState ) => {
        let map = Maps[playerState.dungeonLevel].tiles;
        //check for position is free, and no monster is standing on the ground field, and no player
        if(map[position.x][position.y] === 0 && playerState.position.x !== position.x && playerState.position.y !== position.y && !(playerState.dungeonMonsters.find((monster) => monster.state.position.x === position.x && monster.state.position.y === position.y))) { 
            this.setPosition(position);
            return true;
        }
        return false;
    }

    setPosition = ( position ) => {
    //this.setState({position: position});
        this.state.position.x = position.x;
        this.state.position.y = position.y;
    };

}

export default Monster