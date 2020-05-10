import { classify, readings, getPercentageDrop } from '.'

describe('Kidney Disease Service', () => {
  it('should classify as normal', () => {
    expect(classify(90)).toEqual(readings.NORMAL)
    expect(classify(97)).toEqual(readings.NORMAL)
  })

  it('should classify as mildy decreased', () => {
    expect(classify(89)).toEqual(readings.MILD_DECREASE)
    expect(classify(60)).toEqual(readings.MILD_DECREASE)
    expect(classify(77)).toEqual(readings.MILD_DECREASE)
  })

  it('should classify as mild to moderate', () => {
    expect(classify(45)).toEqual(readings.MILD_MODERATE)
    expect(classify(50)).toEqual(readings.MILD_MODERATE)
    expect(classify(59)).toEqual(readings.MILD_MODERATE)
  })

  it('should classify as moderate to severe', () => {
    expect(classify(30)).toEqual(readings.MODERATE_SEVERE)
    expect(classify(34)).toEqual(readings.MODERATE_SEVERE)
    expect(classify(44)).toEqual(readings.MODERATE_SEVERE)
  })

  it('should classify as severely decreased', () => {
    expect(classify(15)).toEqual(readings.SEVERE_DECREASE)
    expect(classify(20)).toEqual(readings.SEVERE_DECREASE)
    expect(classify(29)).toEqual(readings.SEVERE_DECREASE)
  })

  it('should classify as severe (kidney failure)', () => {
    expect(classify(14)).toEqual(readings.SEVERE)
    expect(classify(0)).toEqual(readings.SEVERE)
  })

  it('should return the correct percentage drops', () => {
    expect(getPercentageDrop(100, 50)).toEqual(50.0)
    expect(getPercentageDrop(35.5, 22.3)).toEqual(37.18)
    expect(getPercentageDrop(11, 15)).toEqual(0.0)
    expect(getPercentageDrop(33, 0)).toEqual(100)
    expect(getPercentageDrop(0, 20)).toEqual(0.0)
  })
})
