const Employee = require('./Employee')

class Intern extends Employee {
  constructor(school) {
    super('Ben', 10, 'codingNewbie@gmail', 'Intern')

    this.school = school
  }

  getSchool() {
    return this.school
  }
}

module.exports = Intern
