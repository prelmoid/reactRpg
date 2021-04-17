import React from 'react';
import Map from './Map';

class World extends React.Component {

    render() {
        return (
            <div className='WorldContainer'>
                <Map />
            </div>
        );

    }
}

export default World;