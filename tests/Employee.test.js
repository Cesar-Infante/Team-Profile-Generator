/* Importing the employee class from the lib folder. */
const employee = require('../lib/employee')

/* Creating a new instance of the employee class. */
const cesar = new employee('Cesar', '30', 'cesar261110@gmail.com')

describe('Check employee values', () => {
    //object deconstructing 
    const { name, id, email} = cesar

    test('Check Name', () => { expect(name).toBe('Cesar')})

    test('Check id', () => { expect(id).toBe('30')})

    test('Check Email', () => { expect(email).toBe('cesar261110@gmail.com')})
});