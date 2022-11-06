// IMPORTS
const { writeFile } = require('fs')
const inquirer = require('inquirer')
const managerQuestions = require('./src/managerQuestions')
const engineerQuestions = require('./src/engineerQuestions')
const internQuestions = require('./src/internQuestions')
const renderHTML = require('./src/renderHTML')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// Build the arrays of answers
const managerOutput = []
const engineerOutput = []
const internOutput = []

// functions to ask questions
// - askManager, askEngi, askIntern
function askManager() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const managerObj = new Manager(managerAnswers.office, [
      managerAnswers.managerName,
      managerAnswers.managerID,
      managerAnswers.managerEmail,
      'Manager',
    ])

    // push object into array to parse later
    managerOutput.push(managerObj)

    if (managerAnswers.managerAskAgain) {
      askManager()
    } else {
      askEngi()
    }
  })
}

function askEngi() {
  inquirer.prompt(engineerQuestions).then((engiAnswers) => {
    const engineerObj = new Engineer(engiAnswers.github, [
      engiAnswers.engineerName,
      engiAnswers.engineerID,
      engiAnswers.engineerEmail,
    ])

    // push object into array to parse later
    engineerOutput.push(engineerObj)

    if (engiAnswers.engineerAskAgain) {
      askEngi()
    } else {
      askIntern()
    }
  })
}

function askIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const internObj = new Intern(internAnswers.school, [
      internAnswers.internName,
      internAnswers.internID,
      internAnswers.internEmail,
    ])

    // push object into array to parse later
    internOutput.push(internObj)

    if (internAnswers.internAskAgain) {
      askIntern()
    } else {
      const compiledData = renderHTML(
        managerOutput,
        engineerOutput,
        internOutput
      )

      // Write the html
      writeFile('./dist/index.html', compiledData, (err) => {
        if (err) {
          return err
        }
      })
    }
  })
}

function ask() {
  askManager()
}

// start the app
ask()
