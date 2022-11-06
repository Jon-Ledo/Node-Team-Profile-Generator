const Employee = require('./Employee')

class Manager extends Employee {
  constructor(officeNumber, args) {
    super(...args)

    this.officeNumber = officeNumber
  }
}

module.exports = Manager
