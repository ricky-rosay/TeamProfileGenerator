const Employees = require('../lib/Employees.js');

test('Checks for required Employee properties', () => {
    const employee = new Employees('ricky', 1,'email@some.com');
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employee Name: ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employee ID: ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Email: ${employee.email}`)
});

test('Gets employees name', () => {
    const employee = new Employees('ricky', 1,'email@some.com');
    expect(employee.getName()).toEqual(expect.any(String));
    console.log(`Employee getName(): ${employee.getName()}`)
});

test('Gets employees id', () => {
    const employee = new Employees('ricky', 1,'email@some.com');
    expect(employee.getId()).toEqual(expect.any(String));
    console.log(`Employee getId(): ${employee.getId()}`)
}); 

test('Gets employees email', () => {
    const employee = new Employees('ricky', 1,'email@some.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(`Employee getEmail(): ${employee.getEmail()}`)
});

test('Gets employees role', () => {
    const employee = new Employees('ricky', 1,'email@some.com');
    expect(employee.getRole()).toBe('Employees');
    console.log(`Employee getRole(): ${employee.getRole()}`)
});