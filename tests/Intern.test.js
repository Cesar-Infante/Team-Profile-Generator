/* importing the intern class from the lib folder. */
const intern = require('../lib/intern')

/* Creating a new object with the values of the intern class. */
const cesar = new intern('Cesar', '30', 'cesar261110@gmail.com', 'UCR')

/* testing the values of the employee object. */
describe('Check employee values', () => {
    const { name, id, email, school } = cesar

    test('Check Name', () => { expect(name).toBe('Cesar')})

    test('Check id', () => { expect(id).toBe('30')})

    test('Check Email', () => { expect(email).toBe('cesar261110@gmail.com')})

    test('Check Github', () => { expect(school).toBe('UCR')})
})