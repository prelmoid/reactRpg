import React from 'react';

class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '-',
            temperature: '-',
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Schaffhausen&units=metric&appid=e6e4c0c127532850511bb5e116bce323')
            .then(response => response.json())
            .then(json => {
               this.setState({city: json.name, temperature: json.main.temp})
            })
    }

    render() {
        return (
            <div className='WeatherDisplay'>
                The temperature at your current location {this.state.city} is {this.state.temperature}°C
            </div>
        );

    }
}

export default WeatherDisplay;