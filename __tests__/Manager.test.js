const Manager = require('../lib/Manager');

test('creates manager', () => {
    const manager = new Manager('Jeff', 165, 'email@email.com', 735);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('obtains manager role', () => {
    const manager = new Manager('Jeff', 165, 'email@email.com', 735);

    expect(manager.getRole()).toEqual('Manager');
});