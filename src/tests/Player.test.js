import { render, fireEvent } from '@testing-library/react';
import { directions } from '../components/Enums'
import { PlayerContext, PlayerProvider } from '../components/player/Player';



let playerPosition = {x: 1, y: 1};

test('test movement, all walls', () => {
    const player = new PlayerProvider();
    player.state.dungeonLevel = 'TestNoMovement'
    console.log(player)
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
 