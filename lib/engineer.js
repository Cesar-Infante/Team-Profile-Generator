/* Importing the employee class from the employee.js file. */
const employee = require('./employee')

/* The above class is a template for creating employee objects. */
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        return 'engineer'
    }
    github() {
        return this.github
    }
}

/* Exporting the engineer class to be used in other files. */
module.exports = engineer