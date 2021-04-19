import React from 'react';
import './Map.css'
import MapRow from './MapRow';
import { Maps } from './maps/Maps'
import { PlayerContext } from '../player/Player';


class Map extends React.Component {
    static contextType = PlayerContext;
    render() {
        let mapLevel = this.context.dungeonLevel;
        let map = Maps[mapLevel].tiles;
        return (
            <div className='MapContainer'>
                {
                    map.map((row, index) => {
                        return (
                            <MapRow 
                                row={row}
                                index={index}
                                key={JSON.stringify(row) + index} />
                        );
                    })
                }
            </div> 
        );

    }
}

export default Map;