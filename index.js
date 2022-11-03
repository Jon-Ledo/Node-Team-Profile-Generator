// IMPORTS
const writeFile = require('fs')
const inquirer = require('inquirer')
const managerQuestions = require('./src/managerQuestions')
const engineerQuestions = require('./src/engineerQuestions')
const internQuestions = require('./src/internQuestions')

// Build the arrays of answers
const managerOutput = []
const engineerOutput = []
const internOutput = []

// functions to ask questions
function askManager() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    managerOutput.push(managerAnswers)
    if (managerAnswers.managerAskAgain) {
      askManager()
    } else {
      askEngi()
    }
  })
}

function askEngi() {
  inquirer.prompt(engineerQuestions).then((engiAnswers) => {
    engineerOutput.push(engiAnswers)

    if (engiAnswers.engineerAskAgain) {
      askEngi()
    } else {
      askIntern()
    }
  })
}

function askIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    internOutput.push(internAnswers)

    if (internAnswers.internAskAgain) {
      askIntern()
    } else {
      console.log('Data to be compiled')
    }
  })
}

function ask() {
  askManager()
}

// start the app
ask()
