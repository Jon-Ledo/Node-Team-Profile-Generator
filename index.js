// IMPORTS
const { writeFile } = require('fs')
const inquirer = require('inquirer')
const managerQuestions = require('./src/managerQuestions')
const engineerQuestions = require('./src/engineerQuestions')
const internQuestions = require('./src/internQuestions')
const renderHTML = require('./src/renderHTML')

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
      const compiledData = renderHTML(
        managerOutput,
        engineerOutput,
        internOutput
      )

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
