const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: 'Enter intern name',
  },
  {
    type: 'input',
    name: 'internID',
    message: 'Enter intern ID',
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'Enter intern email (example: name@email.com)',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter school name',
  },
  {
    type: 'confirm',
    name: 'internAskAgain',
    message: 'Want to enter another intern? (just hit enter for YES)?',
    default: true,
  },
]

module.exports = internQuestions
