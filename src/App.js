import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import Game from './Game';
import { PlayerProvider } from './components/player/Player';

function App() {
  return (
    <div className="App">
      <Header />
      <PlayerProvider>
        <Game />
      </PlayerProvider>
      <Footer />
    </div>
  );
}

export default App;
