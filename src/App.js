import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import Game from './Game';
import Credits from './Credits';
import { PlayerProvider } from './components/player/Player';
import WeatherDisplay from './components/weatherapi/WeatherDisplay';
import PlayerStats from './components/player/PlayerStats';

function App() {
  return (
    <div className="App">
      <Header />
      
      <PlayerProvider>
        <WeatherDisplay />
        <Game />
        <PlayerStats/>
      </PlayerProvider>
      <Credits />
      <Footer />
    </div>
  );
}

export default App;
