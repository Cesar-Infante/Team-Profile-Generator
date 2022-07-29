/* Importing the employee class from the employee.js file. */
const employee = require('./employee')

/* The above class is a template for creating employee objects. */
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        return 'intern'
    }
    school() {
        return this.school
    }
}

module.exports = intern