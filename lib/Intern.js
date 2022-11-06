const Employee = require('./Employee')

class Intern extends Employee {
  constructor(school, args) {
    super(...args)

    this.school = school
  }

  getSchool() {
    return this.school
  }
}

module.exports = Intern
