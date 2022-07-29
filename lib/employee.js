/* The above class is a template for creating employee objects. */
class employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getEmail() {
        return this.email
    }
}

/* Exporting the employee class to be used in other files. */
module.exports = employee