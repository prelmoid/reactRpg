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

    moveMonster = (playerPosition) => {
        let position;
        let moveCompleted = false;
        let direction = Math.floor(Math.random() * (Object.keys(directions).length));
        switch (direction) {
            case 0:
                //check if there's ground
                position = {x: this.state.position.x - 1, y: this.state.position.y};
                moveCompleted = this.checkPosition(position, playerPosition);
                break;
            case 1:
                //check if there's ground
                position = {x: this.state.position.x, y: this.state.position.y + 1};
                moveCompleted = this.checkPosition(position, playerPosition);
                break;
            case 2: 
                //check if there's ground
                position = {x: this.state.position.x + 1, y: this.state.position.y};
                moveCompleted = this.checkPosition(position, playerPosition);
                break;
            case 3:
                //check if there's ground
                position = {x: this.state.position.x, y: this.state.position.y - 1};
                moveCompleted = this.checkPosition(position, playerPosition);
                break;
            default:
                console.log('wrong move input monster');   
        }
        return moveCompleted;
    }

    checkPosition = ( position, playerPosition ) => {
        let map = Maps['1_1'].tiles; 
        //check for position is free, and no monster is standing on the ground field, and no player
        if(map[position.x][position.y] === 0 && playerPosition.x !== position.x && playerPosition.y !== position.y) { //&& !(this.context.state.dungeonMonsters.find((monster) => monster.position.x === position.x && monster.position.y === position.y)) && position.x !== this.context.state.position.x && position.y !== this.context.state.position.y
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