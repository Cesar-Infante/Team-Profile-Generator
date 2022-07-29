/* Importing the employee class from the employee.js file. */
const employee = require('./employee')

/* The manager class extends the employee class and adds the office number property. */
class manager extends employee{
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }
    getRole() {
        return 'Manger'
    }
}

/* Exporting the manager class to be used in other files. */
module.exports = manager