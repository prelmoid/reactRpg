import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Monster from '../components/monsters/Monster';

let monsters = [];
let monster = new Monster('rat', {x: 0, y: 1});
monsters.push(monster);
let playerState = {position: {x: 1, y: 0}, dungeonMonsters: monsters, dungeonLevel: 'TestAllMovement'};
let monsterPosition = {x: 1, y: 1};

test('test movement', () => {
    let testMonster = new Monster('rat', {x: 1, y: 1});
    expect(testMonster.moveMonster(playerState, 0)).toEqual(true); //free field
    testMonster.setPosition(monsterPosition);
    expect(testMonster.moveMonster(playerState, 1)).toEqual(false); //monster on the field
    testMonster.setPosition(monsterPosition);
    expect(testMonster.moveMonster(playerState, 2)).toEqual(true); //free field
    testMonster.setPosition(monsterPosition);
    expect(testMonster.moveMonster(playerState, 3)).toEqual(false); //player on the field

});