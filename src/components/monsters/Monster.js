import React from 'react';
import { directions } from '../Enums'
import { Maps } from '../world/maps/Maps';

class Monster extends React.Component {
    constructor(type, position) {
        super();
        this.state = {
            type: type,
            position: position,
            alive: true,
            health: 10,
            attackPower: 2,
            armorRating: 1,
            experience: 5,
            gold: Math.floor(Math.random() * 10),
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
        //check for attack option, if true, skip move, else move
        if(this.attack(playerState)) {
            return true; //if attack was done, move of the monster is at an end
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

    attack = (playerState) => {
        //check if there is a player around the monster
        //find player north
        if(this.state.position.x - 1 === playerState.position.x && this.state.position.y === playerState.position.y) {
            this.attackPlayer(playerState);
            return true;
        }
        //find player east
        if(this.state.position.x === playerState.position.x && this.state.position.y + 1 === playerState.position.y) {
            this.attackPlayer(playerState)
            return true;
        }
        //find monster south
        if(this.state.position.x + 1 === playerState.position.x && this.state.position.y === playerState.position.y) {
            this.attackPlayer(playerState)
            return true;
        }
        //find monster west
        if(this.state.position.x === playerState.position.x && this.state.position.y - 1 === playerState.position.y) {
            this.attackPlayer(playerState)
            return true;
        }
        return false;
    }

    attackPlayer = (playerState) => {
        let dmg = this.calculateAttackDmg(this.state.attackPower, playerState.armorRating);
        //end game if player has no health left
        if(playerState.health - dmg <= 0) {
            console.log('you died')
            return;
        }
        //reduce health of player
        playerState.health = playerState.health - dmg
        return;
    }

    calculateAttackDmg = (attackPower, armorRating) => {
        //calculate Attackdamage
        //damage = [round]{(attackPower*attackPower)/(attackPower + armorRating of the attacked monster)}
        return Math.round(attackPower*attackPower / (attackPower + armorRating))
    }

    checkPosition = ( position, playerState ) => {
        let map = Maps[playerState.dungeonLevel].tiles;
        //check for position is free, and no monster is standing on the ground field, and no player
        if(map[position.x][position.y] === 0 && playerState.position.x !== position.x && playerState.position.y !== position.y && !(playerState.dungeonMonsters.find((monster) => monster.state.position.x === position.x && monster.state.position.y === position.y && monster.state.alive === true))) { 
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