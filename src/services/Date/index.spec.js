import dateWithFormat from '.'

describe('Date Service', () => {
  it('should return the correct date string', () => {
    const expectedStr = '01-05-2020'
    const actualStr = dateWithFormat(new Date('2020/05/01'), 'dd-MM-yyyy')
    expect(actualStr).toEqual(expectedStr)
  })
})
