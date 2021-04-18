import React, {useContext} from 'react';
import { PlayerContext } from '../player/Player';

const Tile = (props) => {
    //tiles value: 0 Ground, 1 Wall
    const [player] = useContext(PlayerContext);

    
    if (player[0]['positionX'] === props.index[0] && player[0]['positionY'] === props.index[1]) {
        return (
            <PlayerTile />
        );
    }
    if (props.tile === 0) {
        return (<GroundTile />);
    } else if (props.tile === 1) {
        return (<WallTile />);
    }
    return (<div>{props.tile}</div>);
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
            height: 16, width: 16, backgroundSize: '50%', backgroundImage: `url("/img/UniversalFantasyRLTiles3ed.png")`, backgroundPositionX: -32, backgroundPositionY: -96

        }}>
            <div className="playerDiv" style={{
                height: 16, width: 16, backgroundImage: `url("/img/Heroes_01.png")`, backgroundPositionX: -163, backgroundPositionY: -66

            }}>
            </div>
        </div>
    );
}


export default Tile;