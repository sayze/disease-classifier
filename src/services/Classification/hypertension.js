import Classification from '.'

/**
 * Dictionary to keep track of all the possible stages.
 * @type {{STAGE_2: *, STAGE_1: *, STAGE_3: *, STAGE_0: *}}
 */
export const stages = Object.freeze({
  STAGE_0: new Classification('hype-s0', 'No Hypertension'),
  STAGE_1: new Classification('hype-s1', 'Stage 1'),
  STAGE_2: new Classification('hype-s2', 'Stage 2'),
  STAGE_3: new Classification('hype-s3', 'Stage 3'),
})

/**
 * Factory to derive the appropriate stage given blood pressure parameters.
 * @param {number} sysBp
 * @param {number} dialBp
 * @returns {Classification}
 */
export function classifyHypertension(sysBp = 0, dialBp = 0) {
  if ((sysBp >= 140 && sysBp < 160) || (dialBp >= 90 && dialBp < 100)) {
    return stages.STAGE_1
  }

  if ((sysBp >= 160 && sysBp < 180) || (dialBp >= 100 && dialBp < 110)) {
    return stages.STAGE_2
  }

  if (sysBp >= 180 && dialBp >= 120) {
    return stages.STAGE_3
  }

  return stages.STAGE_0
}
