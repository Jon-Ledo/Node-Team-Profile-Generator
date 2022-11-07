const Employee = require('../lib/Employee')

describe('Employee', () => {
  // mock data for testing
  const mockEmployee = ['Jon', 1, 'Email']

  test('should contruct a new instance of the Employee class', () => {
    const person = new Employee(...mockEmployee)

    expect(person).toBeInstanceOf(Employee)
  })

  // getName()
  test('should return the name "Jon" with function getName()', () => {
    const employee = new Employee(...mockEmployee)
    expect(employee.getName()).toEqual('Jon')
  })

  // getId()
  test('should return the number 1 with function getId()', () => {
    const employee = new Employee(...mockEmployee)
    expect(employee.getId()).toEqual(1)
  })

  // getEmail()
  test('should return "Email" with function getEmail()', () => {
    const employee = new Employee(...mockEmployee)
    expect(employee.getEmail()).toEqual('Email')
  })
})
