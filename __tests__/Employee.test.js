const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Employee', 'ID####', 'email@email.com');

    expect(employee.name).toBe('name',);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});  

test('gets user name', () => {
    const employee = new Employee('Employee', 'ID####', 'email@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


