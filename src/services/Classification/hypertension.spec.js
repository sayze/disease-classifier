import { classifyHypertension, stages } from '.'

describe('Hypertension Service', () => {
  it('should classifyHypertension as no hyper tension', () => {
    expect(classifyHypertension(0, 0)).toEqual(stages.STAGE_0)

    // Test upper and lower limits of stage 1
    expect(classifyHypertension(139)).toEqual(stages.STAGE_0)
    expect(classifyHypertension(0, 89)).toEqual(stages.STAGE_0)
  })

  it('should classifyHypertension as stage 1', () => {
    expect(classifyHypertension(140)).toEqual(stages.STAGE_1)
    expect(classifyHypertension(159)).toEqual(stages.STAGE_1)
    expect(classifyHypertension(0, 90)).toEqual(stages.STAGE_1)
    expect(classifyHypertension(0, 99)).toEqual(stages.STAGE_1)
    expect(classifyHypertension(140, 90)).toEqual(stages.STAGE_1)
    expect(classifyHypertension(159, 99)).toEqual(stages.STAGE_1)
  })

  it('should classifyHypertension as stage 2', () => {
    expect(classifyHypertension(160)).toEqual(stages.STAGE_2)
    expect(classifyHypertension(179)).toEqual(stages.STAGE_2)
    expect(classifyHypertension(0, 100)).toEqual(stages.STAGE_2)
    expect(classifyHypertension(0, 109)).toEqual(stages.STAGE_2)
    expect(classifyHypertension(160, 100)).toEqual(stages.STAGE_2)
    expect(classifyHypertension(179, 109)).toEqual(stages.STAGE_2)
  })

  it('should classifyHypertension as stage 3', () => {
    expect(classifyHypertension(180, 120)).toEqual(stages.STAGE_3)
    expect(classifyHypertension(188, 121)).toEqual(stages.STAGE_3)
  })
})
