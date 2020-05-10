import dateWithFormat from '.'

describe('Date Service', () => {
  it('should return the correct date string', () => {
    const expectedStr = '01-05-2020'
    const actualStr = dateWithFormat('dd-MM-yyyy', new Date('2020/05/01'))
    expect(actualStr).toEqual(expectedStr)
  })
})
