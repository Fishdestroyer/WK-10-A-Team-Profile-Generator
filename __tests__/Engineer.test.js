const Engineer = require('../lib/Engineer');


test('creates engineer', () => {
    const engineer = new Engineer('Beethoven', 55, 'fifth@symphony.com', 'concerto');

    expect(engineer.github).toEqual(expect.any(String));;
});



test('obtains github username', () => {
    const engineer = new Engineer('Beethoven', 55, 'fifth@symphony.com', 'concerto');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get engineer role', () => {
    const engineer = new Engineer('Beethoven', 55, 'fifth@symphony.com', 'concerto');

    expect(engineer.getRole()).toEqual('Engineer');
});