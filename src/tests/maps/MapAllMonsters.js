//tiles value: 0 Ground, 1 Wall

const tiles = [
    [0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0,],
];

const monsters = [
    {   
        state: {
            type: 'rat',
            position: {x: 0, y: 1}
        }
    },
    {
        state: {
            type: 'rat',
            position: {x: 1, y: 0}
        }
    },
    {
        state: {
            type: 'rat',
            position: {x: 1, y: 2}
        }
    },
    {
        state: {
            type: 'rat',
            position: {x: 2, y: 1}
        }
    }
    ];


export default { tiles, monsters };