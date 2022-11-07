const Manager = require('../lib/Manager')

describe('Manager class', () => {
  const mockStats = ['Jon', 1, 'Email', 'Manager']
  const mockManager = new Manager(251, mockStats)

  // is An Instance?
  test('should construct new instance of Manager', () => {
    expect(mockManager).toBeInstanceOf(Manager)
  })

  // getRole()
  test('should return the role of "Manager"', () => {
    expect(mockManager.getRole()).toEqual('Manager')
  })

  // get values
  test('should return all the input variables', () => {
    expect(mockManager.officeNumber).toEqual(251)
    expect(mockManager.name).toEqual('Jon')
    expect(mockManager.id).toEqual(1)
    expect(mockManager.email).toEqual('Email')
  })
})
