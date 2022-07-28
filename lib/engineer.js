const employee = require('./employee')
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

module.exports = engineer