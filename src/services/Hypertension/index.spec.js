import { classify, stages } from '.'

describe('Hypertension Service', () => {
  it('should classify as no hyper tension', () => {
    expect(classify(0, 0)).toEqual(stages.STAGE_0)

    // Test upper and lower limits of stage 1
    expect(classify(139)).toEqual(stages.STAGE_0)
    expect(classify(0, 89)).toEqual(stages.STAGE_0)
  })

  it('should classify as stage 1', () => {
    expect(classify(140)).toEqual(stages.STAGE_1)
    expect(classify(159)).toEqual(stages.STAGE_1)
    expect(classify(0, 90)).toEqual(stages.STAGE_1)
    expect(classify(0, 99)).toEqual(stages.STAGE_1)
    expect(classify(140, 90)).toEqual(stages.STAGE_1)
    expect(classify(159, 99)).toEqual(stages.STAGE_1)
  })

  it('should classify as stage 2', () => {
    expect(classify(160)).toEqual(stages.STAGE_2)
    expect(classify(179)).toEqual(stages.STAGE_2)
    expect(classify(0, 100)).toEqual(stages.STAGE_2)
    expect(classify(0, 109)).toEqual(stages.STAGE_2)
    expect(classify(160, 100)).toEqual(stages.STAGE_2)
    expect(classify(179, 109)).toEqual(stages.STAGE_2)
  })

  it('should classify as stage 3', () => {
    expect(classify(180, 120)).toEqual(stages.STAGE_3)
    expect(classify(188, 121)).toEqual(stages.STAGE_3)
  })
})
