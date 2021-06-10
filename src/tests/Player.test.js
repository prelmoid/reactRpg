import { PlayerProvider } from '../components/player/Player';
import { fireEvent, render, screen } from '@testing-library/react';
import PlayerName from '../components/player/PlayerName';

let playerPosition = {x: 1, y: 1};

test('test movement, all walls', () => {
    const player = new PlayerProvider();
    player.state.dungeonLevel = 'TestNoMovement'
    expect(player.movePlayer(0)).toEqual(false);
    player.state.position = playerPosition;
    expect(player.state.movePlayer(1)).toEqual(false);
    player.state.position = playerPosition;
    expect(player.state.movePlayer(2)).toEqual(false);
    player.state.position = playerPosition;
    expect(player.state.movePlayer(3)).toEqual(false);

});

test('test movement, all possible', () => {
    const player = new PlayerProvider();
    player.state.dungeonLevel = 'TestAllMovement';
    expect(player.movePlayer(0)).toEqual(true);
    player.state.position = playerPosition;
    expect(player.movePlayer(1)).toEqual(true);
    player.state.position = playerPosition;
    expect(player.movePlayer(2)).toEqual(true);
    player.state.position = playerPosition;
    expect(player.movePlayer(3)).toEqual(true);
});
 

test('Test Playername input', () => {
    render(<PlayerProvider />);
    fireEvent.change(screen.getByPlaceholderText(/Input Playername/i), {target: {value: 'prelmoid'},});
    fireEvent.click(screen.getByText(/Save Playername/i))
    const linkElement = screen.getByText(/prelmoid/i);
    expect(linkElement).toBeInTheDocument();
  });