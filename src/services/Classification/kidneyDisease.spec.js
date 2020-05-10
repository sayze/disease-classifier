import { classifyKidneyDisease, readings, getPercentageDrop } from '.'

describe('Kidney Disease Service', () => {
  it('should classifyKidneyDisease as normal', () => {
    expect(classifyKidneyDisease(90)).toEqual(readings.NORMAL)
    expect(classifyKidneyDisease(97)).toEqual(readings.NORMAL)
  })

  it('should classifyKidneyDisease as mildy decreased', () => {
    expect(classifyKidneyDisease(89)).toEqual(readings.MILD_DECREASE)
    expect(classifyKidneyDisease(60)).toEqual(readings.MILD_DECREASE)
    expect(classifyKidneyDisease(77)).toEqual(readings.MILD_DECREASE)
  })

  it('should classifyKidneyDisease as mild to moderate', () => {
    expect(classifyKidneyDisease(45)).toEqual(readings.MILD_MODERATE)
    expect(classifyKidneyDisease(50)).toEqual(readings.MILD_MODERATE)
    expect(classifyKidneyDisease(59)).toEqual(readings.MILD_MODERATE)
  })

  it('should classifyKidneyDisease as moderate to severe', () => {
    expect(classifyKidneyDisease(30)).toEqual(readings.MODERATE_SEVERE)
    expect(classifyKidneyDisease(34)).toEqual(readings.MODERATE_SEVERE)
    expect(classifyKidneyDisease(44)).toEqual(readings.MODERATE_SEVERE)
  })

  it('should classifyKidneyDisease as severely decreased', () => {
    expect(classifyKidneyDisease(15)).toEqual(readings.SEVERE_DECREASE)
    expect(classifyKidneyDisease(20)).toEqual(readings.SEVERE_DECREASE)
    expect(classifyKidneyDisease(29)).toEqual(readings.SEVERE_DECREASE)
  })

  it('should classifyKidneyDisease as severe (kidney failure)', () => {
    expect(classifyKidneyDisease(14)).toEqual(readings.SEVERE)
    expect(classifyKidneyDisease(0)).toEqual(readings.SEVERE)
  })

  it('should return the correct percentage drops', () => {
    expect(getPercentageDrop(100, 50)).toEqual(50.0)
    expect(getPercentageDrop(35.5, 22.3)).toEqual(37.18)
    expect(getPercentageDrop(11, 15)).toEqual(0.0)
    expect(getPercentageDrop(33, 0)).toEqual(100)
    expect(getPercentageDrop(0, 20)).toEqual(0.0)
  })
})
