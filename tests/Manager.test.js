/* Importing the manager class from the lib folder. */
const manager = require('../lib/manager')

/* Creating a new instance of the manager class. */
const cesar = new manager('Cesar', '30', 'cesar261110@gmail.com', '07')

/* A test to check if the values are correct. */
describe('Check employee values', () => {
    const { name, id, email, officeNum } = cesar

    test('Check Name', () => { expect(name).toBe('Cesar')})

    test('Check id', () => { expect(id).toBe('30')})

    test('Check Email', () => { expect(email).toBe('cesar261110@gmail.com')})

    test('Check Github', () => { expect(officeNum).toBe('07')})
})