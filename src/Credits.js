import React from 'react';
import  './Credits.css';

class Credits extends React.Component {

    render() {
        return (
            <footer className="App-credits">
                Copyright and Credits:
                <div>
                <a href="https://opengameart.org/content/roguelike-monsters">roguelikecreatures</a>: Created by <a href="https://twitter.com/JoeCreates">Joe Williams</a>
                </div>
                <div>
                <a href="https://opengameart.org/content/universal-fantasy-roguelike-tileset-16x16">UniversalFatasyRLTiles3ed</a>: Universal Fantasy Roguelike Tileset by Rocetti 
                </div>
                <div>
                <a href="https://opengameart.org/content/tiny-characters-set">M_08 (Character)</a>: Created by <a href="https://opengameart.org/users/fleurman">Fleurmann</a>
                </div>
            </footer>
        );
    }
}

export default Credits;