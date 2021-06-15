import React from 'react';
import { PlayerContext } from '../player/Player';
import './WeatherDisplay.css';
class WeatherDisplay extends React.Component {
    static contextType = PlayerContext;
    constructor(props) {
        super(props);
        this.state = {
            city: '-',
            temperature: '-',
            lat: '',
            lon: ''
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.updateLocationInfo);
        } else {
          console.log('no access to navigator');
        }
      }

    updateLocationInfo = (position) => {
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=e6e4c0c127532850511bb5e116bce323`)
            .then(response => response.json())
            .then(json => {
               this.setState({city: json.name, temperature: json.main.temp, description: json.weather[0].description, icon: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`})
               this.context.setWeather(json.weather[0].description);
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className='WeatherDisplay'>
                The temperature at your current location {this.state.city} is {this.state.temperature}°C <img src={this.state.icon} alt={this.state.description}/>
            </div>
        );

    }
}

export default WeatherDisplay;