const Engineers = require("../lib/Engineers");

const testObject = {name: 'Ricky', id: 2, email: "irunricky@some.com", github: "ricky-rosay"}

test('Checks for inherited Employee properties', () => {
    const engineer = new Engineers(testObject);
    expect(engineer.name).toEqual(expect.any(String));
    console.log(`Engineer name: ${engineer.name}`)
    expect(engineer.id).toEqual(expect.any(Number));
    console.log(`Engineer id: ${engineer.id}`)
    expect(engineer.email).toEqual(expect.any(String));
    console.log(`Engineer email: ${engineer.email}`)
});

test('Checks for github', () => {
    const engineer = new Engineers(testObject);
    expect(engineer.github).toEqual(expect.any(String));
    console.log(`Engineer github: ${engineer.github}`)
});

test('Checks for office number', () => {
    const engineer = new Engineers(testObject);
    expect(engineer.getGithub()).toEqual(expect.any(String));
    console.log(`Engineer getGithub(): ${engineer.getGithub()}`)
});

test('Gets Engineer role', () => {
    const engineer = new Engineers(testObject);
    expect(engineer.getRole()).toBe('Engineers');
    console.log(`Engineer getRole(): ${engineer.getRole()}`)
});