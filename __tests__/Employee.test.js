const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Employee', 'ID####', 'email@email.com');

    expect(employee.name).toBe('Employee',);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

module.exports = Employee;