import React from "react";
import { PlayerContext } from "./Player";

class PlayerStats extends React.Component {
    static contextType = PlayerContext;

    render() {
        return (
        <div style={{background: 'black', color: 'white'}}>
            Gold: <span style={{color: 'yellow'}}>{this.context.gold}</span> | Level: <span style={{color: 'blue'}}>{this.context.lvl}</span>(Exp: <span style={{color: 'orange'}}>{this.context.experience} / {this.context.experienceToNextLevel}</span>) | HP: <span style={{color: 'green'}}>{this.context.health} / {this.context.maxHealth}</span> AP: <span style={{color: 'red'}}>{this.context.attackPower}</span> AR: <span style={{color: 'purple'}}>{this.context.armorRating}</span> 
        </div>
        );
    }
}

export default PlayerStats;