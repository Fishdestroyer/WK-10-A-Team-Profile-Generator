const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee('Cornelius', '5', 'crack@head.com')

  expect(employee.name).toBe('Cornelius');
  expect(employee.id).toBe('5');
  expect(employee.email).toBe('crack@head.com');
});

test('gets Employee name', () => {
  const employee = new Employee('Cornelius');

  expect(employee.getName()).toBe('Cornelius');
});

test('gets Employee id', () => {
  const employee = new Employee('Cornelius', '5');

  expect(employee.getId()).toBe('5');
});

test('gets Employee email', () => {
  const employee = new Employee('Cornelius', '5', 'crack@head.com');

  expect(employee.getEmail()).toBe('crack@head.com');
});

test('gets Employee role', () => {
  const employee = new Employee('Cornelius', '5', 'crack@head.com');

  expect(employee.getRole()).toBe('Employee');
});


