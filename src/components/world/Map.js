import React from 'react';
import './Map.css'
import MapRow from './MapRow';
import tiles from './maps/Map1.js'

class Map extends React.Component {
    
    render() {
        return (
            <div className='MapContainer'>
                {
                    tiles.map((row, index) => {
                        return (
                            <MapRow 
                                tiles={row}
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