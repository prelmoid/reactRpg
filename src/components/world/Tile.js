import React from 'react';
import { PlayerContext } from '../player/Player';

class Tile extends React.Component {
    //tiles value: 0 Ground, 1 Wall
    static contextType = PlayerContext;

    render () {
        let monsterArray = this.context.dungeonMonsters;
        let visibility = false;
        if (this.props.index[1] <= this.context.position.x + this.context.visibilityRadius 
            && this.props.index[1] >= this.context.position.x - this.context.visibilityRadius
            && this.props.index[0] <= this.context.position.y + this.context.visibilityRadius 
            && this.props.index[0] >= this.context.position.y - this.context.visibilityRadius) {
            visibility = true;
        }

        if (monsterArray.find((monster) => monster.state.position.x === this.props.index[1] && monster.state.position.y === this.props.index[0] && monster.state.alive === true)){
            return (
                <MonsterTile visibility={visibility}/>
            );
        }

        if (this.context.position.x === this.props.index[1] && this.context.position.y === this.props.index[0]) {
            return (
                <PlayerTile />
            );
        }
        if (this.props.tile === 0) {
            return (<GroundTile visibility={visibility}/>);
        } else if (this.props.tile === 1) {
            return (<WallTile visibility={visibility}/>);
        } else if (this.props.tile === 2) {
            return (<StairTile visibility={visibility}/>);
        }
        return (<div>{this.props.tile}</div>);
    }
}

const GroundTile = (visibility) => {
    let styles;
    if (visibility.visibility === true) {
        styles = {
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, 
            backgroundPositionX: -32, backgroundPositionY: -96
        };
    } else {
        styles = {
            height: 16, width: 16, backgroundColor: '#000000'
        };
    }
    return (
        
        <div style={styles}>
        </div>
    );
}

const StairTile = (visibility) => {
    let styles;
    if (visibility.visibility === true) {
        styles = {
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, 
            backgroundPositionX: -16, backgroundPositionY: -128
        };
    } else {
        styles = {
            height: 16, width: 16, backgroundColor: '#000000'
        };
    }
    return (
        
        <div style={styles}>
        </div>
    );
}

const WallTile = (visibility) => {
    let styles;
    if (visibility.visibility === true) {
        styles = {
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -112
        };
    } else {
        styles = {
            height: 16, width: 16, backgroundColor: '#000000'
        };
    }
    return (
        <div style={styles}>
          </div>
    );
}

const PlayerTile = () => {
    return (
        <div style={{
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -96

        }}>
            <div className="playerDiv" style={{
                height: 16, width: 16, backgroundImage: `url("/img/M_08.png")`, backgroundPositionX: 0, backgroundPositionY: -2

            }}>
            </div>
        </div>
    );
}

const MonsterTile = (visibility) => {
    let styles;
    if (visibility.visibility === true) {
        styles = {
                height: 16, width: 16, backgroundImage: `url("/img/roguelikecreatures.png")`, backgroundPositionX: -1, backgroundPositionY: -18
        };
    } else {
        styles = {
            height: 16, width: 16, backgroundColor: '#000000'
        };
    }
    return (
        <div style={{
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -96

        }}>
            <div className="monsterDiv" style={styles}>
            </div>
        </div>
    );
}

export default Tile;