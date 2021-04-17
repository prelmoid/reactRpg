import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                A simple RPG game made with React  <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
        );
    }
}

export default Header