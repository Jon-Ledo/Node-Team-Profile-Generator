const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
  const mockStats = ['Jon', 1, 'Email', 'Engineer']
  const mockEngineer = new Engineer('githubAccount', mockStats)

  // is An Instance?
  test('should construct new instance of Engineer', () => {
    expect(mockEngineer).toBeInstanceOf(Engineer)
  })

  // getRole()
  test('should return the role of "Engineer"', () => {
    expect(mockEngineer.getRole()).toEqual('Engineer')
  })

  // getGithub()
  test('returns the github account name', () => {
    expect(mockEngineer.getGithub()).toEqual('githubAccount')
  })

  // get values
  test('should return all the input variables', () => {
    expect(mockEngineer.github).toEqual('githubAccount')
    expect(mockEngineer.name).toEqual('Jon')
    expect(mockEngineer.id).toEqual(1)
    expect(mockEngineer.email).toEqual('Email')
  })
})
