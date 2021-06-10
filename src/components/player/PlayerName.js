import React from "react";
import PropTypes from "prop-types";

class PlayerName extends React.Component {
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    static propTypes = {
        send: PropTypes.func
    };

    render() {
        const { send } = this.props;
        return (
        <React.Fragment> 
            <input placeholder="Input Playername" ref={this.textInput} />
            <button
            onClick={() => send(this.textInput.current.value)}
            className="icon"
            >
            Save Name
            </button>
        </React.Fragment>
        );
    }
}

export default PlayerName;