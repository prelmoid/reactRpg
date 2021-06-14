import React from 'react';
import { PlayerContext } from '../player/Player';

class Tile extends React.Component {
    //tiles value: 0 Ground, 1 Wall
    static contextType = PlayerContext;

    render () {
        let monsterArray = this.context.dungeonMonsters;
        if (monsterArray.find((monster) => monster.state.position.x === this.props.index[1] && monster.state.position.y === this.props.index[0])){
            return (
                <RatTile />
            );
        }

        if (this.context.position.x === this.props.index[1] && this.context.position.y === this.props.index[0]) {
            return (
                <PlayerTile />
            );
        }
        if (this.props.tile === 0) {
            return (<GroundTile />);
        } else if (this.props.tile === 1) {
            return (<WallTile />);
        }
        return (<div>{this.props.tile}</div>);
    }
}

const GroundTile = () => {
    return (
        <div style={{
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -96

        }}>
        </div>
    );
}

const WallTile = () => {
    return (
        <div style={{
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -112

        }}>
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

const RatTile = () => {
    return (
        <div style={{
            height: 16, width: 16, backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -96

        }}>
            <div className="monsterDiv" style={{
                height: 16, width: 16, backgroundImage: `url("/img/roguelikecreatures.png")`, backgroundPositionX: -1, backgroundPositionY: -18

            }}>
            </div>
        </div>
    );
}

export default Tile;