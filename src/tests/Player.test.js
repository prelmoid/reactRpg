import { PlayerProvider } from '../components/player/Player';
import { fireEvent, render, screen } from '@testing-library/react';
import PlayerStats from '../components/player/PlayerStats';
import { Maps } from '../components/world/maps/Maps'

let playerPosition = {x: 1, y: 1};

test('test movement, all walls', () => {
    const player = new PlayerProvider();
    player.state.dungeonLevel = 'TestNoMovement'
    expect(player.movePlayer(0, false)).toEqual(false);
    player.state.position = playerPosition;
    expect(player.state.movePlayer(1, false)).toEqual(false);
    player.state.position = playerPosition;
    expect(player.state.movePlayer(2, false)).toEqual(false);
    player.state.position = playerPosition;
    expect(player.state.movePlayer(3, false)).toEqual(false);

});

test('test movement, all possible', () => {
    const player = new PlayerProvider();
    player.state.dungeonLevel = 'TestAllMovement';
    expect(player.movePlayer(0, false)).toEqual(true);
    player.state.position = playerPosition;
    expect(player.movePlayer(1, false)).toEqual(true);
    player.state.position = playerPosition;
    expect(player.movePlayer(2, false)).toEqual(true);
    player.state.position = playerPosition;
    expect(player.movePlayer(3, false)).toEqual(true);
});

test('test no movement, all monsters', () => {
  const player = new PlayerProvider();
  
  //first with no monsters
  player.state.dungeonMonsters = [];
  player.state.dungeonLevel = 'TestAllMonsters';
  expect(player.movePlayer(0, false)).toEqual(true);
  player.state.position = playerPosition;
  expect(player.movePlayer(1, false)).toEqual(true);
  player.state.position = playerPosition;
  expect(player.movePlayer(2, false)).toEqual(true);
  player.state.position = playerPosition;
  expect(player.movePlayer(3, false)).toEqual(true);
  //test with monsters no movement possible
  player.state.dungeonMonsters = Maps['TestAllMonsters'].monsters;
  expect(player.movePlayer(0, false)).toEqual(false);
  player.state.position = playerPosition;
  expect(player.movePlayer(1, false)).toEqual(false);
  player.state.position = playerPosition;
  expect(player.movePlayer(2, false)).toEqual(false);
  player.state.position = playerPosition;
  expect(player.movePlayer(3, false)).toEqual(false);
});
 

test('Test Playername input', () => {
    render(<PlayerProvider />);
    fireEvent.change(screen.getByPlaceholderText(/Input Playername/i), {target: {value: 'prelmoid'},});
    fireEvent.click(screen.getByText(/Save Playername/i))
    const linkElement = screen.getByText(/prelmoid/i);
    expect(linkElement).toBeInTheDocument();
  });

test('Test Playerstats', () => {
  render(<PlayerProvider>
              <PlayerStats />
          </PlayerProvider>
  );
  let linkElement = screen.getByText(/Gold/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/10/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test attack dmg calculation', () => {
  const player = new PlayerProvider();
  expect(player.calculateAttackDmg(10, 1)).toEqual(9);
});
/*
test('Test Playerstats Level gain', () => {
  const player = new PlayerProvider();
  player.calculateExperienceLevel(10);
  expect(player.state.experience).toEqual(10);
});
*/