import React from 'react';
import Map from './Map';

class World extends React.Component {

    render() {
       
        return (
            <div className='WorldContainer'>
                <Map player={this.props.player}/>
            </div>
        );

    }
}

export default World;