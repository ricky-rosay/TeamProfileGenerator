const Employees = require('./Employees');

class Engineers extends Employees {
    constructor({name, id, email, github}) {
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineers'
    }
}

module.exports = Engineers
