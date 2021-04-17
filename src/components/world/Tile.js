import React from 'react';


class Tile extends React.Component {
    
    render() {
        //tiles value: 0 Ground, 1 Wall
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

export default Tile;