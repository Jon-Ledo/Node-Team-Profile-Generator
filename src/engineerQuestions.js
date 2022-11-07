const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'Enter engineer name',
  },
  {
    type: 'input',
    name: 'engineerID',
    message: 'Enter engineer ID',
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'Enter engineer email (example: name@email.com)',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter github username',
  },
  {
    type: 'confirm',
    name: 'engineerAskAgain',
    message: 'Want to enter another engineer? (just hit enter for YES)?',
    default: true,
  },
]

module.exports = engineerQuestions
