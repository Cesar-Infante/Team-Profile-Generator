/* Importing the engineer class from the engineer.js file. */
const engineer = require('../lib/engineer')

/* Creating a new instance of the engineer class. */
const cesar = new engineer('Cesar', '30', 'cesar261110@gmail.com', 'cesar-infante')

/* Checking the values of the employee. */
describe('Check employee values', () => {
    const { name, id, email, github } = cesar

    test('Check Name', () => { expect(name).toBe('Cesar')})

    test('Check id', () => { expect(id).toBe('30')})

    test('Check Email', () => { expect(email).toBe('cesar261110@gmail.com')})

    test('Check Github', () => { expect(github).toBe('cesar-infante')})
})

