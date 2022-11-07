const managerQuestions = [
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
    message: 'Enter manager email (example: name@email.com)',
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

module.exports = managerQuestions


// menu
// add an engineer
// add an intern
// finish building my team 

// select engineer
// fill inputs
// go back to previous menu