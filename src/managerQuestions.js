const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: 'Who is the team manager?',
  },
  {
    type: 'input',
    name: 'managerID',
    message: 'Enter manager ID',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'Enter manager email',
  },
  {
    type: 'input',
    name: 'office',
    message: 'Enter manager office number',
  },
  {
    type: 'confirm',
    name: 'managerAskAgain',
    message: 'Want to enter another manager? (just hit enter for YES)?',
    default: true,
  },
]

module.exports = questions
