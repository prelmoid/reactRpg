
import Monster from '../components/monsters/Monster';

test('test movement north', () => {
    let monsters = [];
    let monster = new Monster('rat', {x: 1, y: 0});
    monsters.push(monster);
    let playerState = {position: {x: 2, y: 2}, dungeonMonsters: monsters, dungeonLevel: 'TestAllMovement'};
    let testMonsterNorth = new Monster('rat', {x: 1, y: 1});
    expect(testMonsterNorth.moveMonster(playerState, 0)).toEqual(false); //monster on the field
});

test('test movement east', () => {
    let monsters = [];
    let monster = new Monster('rat', {x: 0, y: 1});
    monsters.push(monster);
    let playerState = {position: {x: 2, y: 2}, dungeonMonsters: monsters, dungeonLevel: 'TestAllMovement'};
    let testMonsterEast = new Monster('rat', {x: 1, y: 1});
    expect(testMonsterEast.moveMonster(playerState, 1)).toEqual(false); //free field
});

test('test movement south', () => {
    let monsters = [];
    let monster = new Monster('rat', {x: 1, y: 2});
    monsters.push(monster);
    let playerState = {position: {x: 2, y: 2}, dungeonMonsters: monsters, dungeonLevel: 'TestAllMovement'};
    let testMonsterSouth = new Monster('rat', {x: 1, y: 1});
    expect(testMonsterSouth.moveMonster(playerState, 2)).toEqual(true); //free field
});

test('test movement west', () => {
    let monsters = [];
    let monster = new Monster('rat', {x: 1, y: 0});
    monsters.push(monster);
    let playerState = {position: {x: 1, y: 0}, dungeonMonsters: monsters, dungeonLevel: 'TestAllMovement'};
    let testMonsterWest = new Monster('rat', {x: 1, y: 1});
    expect(testMonsterWest.moveMonster(playerState, 3)).toEqual(false); //player on the field
});