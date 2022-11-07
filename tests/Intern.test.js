const Intern = require('../lib/Intern')

describe('Engineer', () => {
  const mockStats = ['Jon', 1, 'Email', 'Intern']
  const mockIntern = new Intern('bootcamp', mockStats)

  // is An Instance?
  test('should construct new instance of Intern', () => {
    expect(mockIntern).toBeInstanceOf(Intern)
  })

  // getRole()
  test('should return the role of "Intern"', () => {
    expect(mockIntern.getRole()).toEqual('Intern')
  })

  // get values
  test('should return all the input variables', () => {
    expect(mockIntern.school).toEqual('bootcamp')
    expect(mockIntern.name).toEqual('Jon')
    expect(mockIntern.id).toEqual(1)
    expect(mockIntern.email).toEqual('Email')
  })
})
