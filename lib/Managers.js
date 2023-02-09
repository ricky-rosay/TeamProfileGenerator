const Employees = require('./Employees');

class Managers extends Employees {
    constructor({name, id, email, officeNumber}) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return 'Managers'
    }
}

module.exports = Managers 