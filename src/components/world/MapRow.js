import React from 'react';
import Tile from './Tile';

class MapRow extends React.Component {
    render() {
        return (
            <div className='row'
              style={{ height: 16 , display: 'flex'}}>
              {
                this.props.row.map((tile, index) => {
                  return(
                    <Tile
                      tile={tile}
                      index={[index, this.props.index]}
                      key={JSON.stringify(tile) + index} />
                  );
                })
              }
            </div>
          );
    }

}

export default MapRow;