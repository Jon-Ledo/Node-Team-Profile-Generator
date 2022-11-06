const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(github, args) {
    super(...args)

    this.github = github
  }

  getGithub() {
    return this.github
  }
}

module.exports = Engineer
