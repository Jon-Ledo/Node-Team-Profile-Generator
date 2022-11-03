const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(github) {
    super('Ted', 2, 'Ted@email.com', 'Engineer')

    this.github = github
  }

  getGithub() {
    return this.github
  }
}

module.exports = Engineer
