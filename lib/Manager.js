const Employee = require('./Employee')

class Manager extends Employee {
  constructor(officeNumber) {
    super('Jim', 1, 'Jim@email.com', 'Manager')

    this.officeNumber = officeNumber
  }
}

module.exports = Manager
