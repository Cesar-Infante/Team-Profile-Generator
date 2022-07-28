const employee = require('./employee')
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