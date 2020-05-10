import Classification from '.'

/**
 * Dictionary to keep track of all the possible classifications.
 */
export const readings = Object.freeze({
  NORMAL: new Classification('kid-norm', 'Normal'),
  MILD_DECREASE: new Classification('kid-mild-dec', 'Mildly Decreased'),
  MILD_TO_MODERATE: new Classification('kid-mild-mod', 'Mild to Moderate'),
  MODERATE_TO_SEVERE: new Classification('kid-mod-severe', 'Moderate to Severe'),
  SEVERE_DECREASE: new Classification('kid-severe-dec', 'Severely Decreased'),
  SEVERE: new Classification('kid-severe', 'Kidney Failure'),
})

/**
 * Factory to derive the appropriate classification given egfr.
 * @param {number} eGFR
 * @returns {Classification}
 */
export function classifyKidneyDisease(eGFR = 0) {
  if (eGFR >= 90) {
    return readings.NORMAL
  }

  if (eGFR >= 60 && eGFR <= 89) {
    return readings.MILD_DECREASE
  }

  if (eGFR >= 45 && eGFR <= 59) {
    return readings.MILD_TO_MODERATE
  }

  if (eGFR >= 30 && eGFR <= 44) {
    return readings.MODERATE_TO_SEVERE
  }

  if (eGFR >= 15 && eGFR <= 29) {
    return readings.SEVERE_DECREASE
  }

  return readings.SEVERE
}

/**
 * Determine percentage 2 consecutive reading are dropped.
 * @param {number} egfrPrev
 * @param {number} egfrCurr
 * @returns {number}
 */
export function getPercentageDrop(egfrPrev = 0, egfrCurr = 0) {
  // No drop happened.
  if (egfrCurr >= egfrPrev) {
    return 0
  }

  const difference = egfrPrev - egfrCurr
  return parseFloat(((difference / egfrPrev) * 100).toFixed(2))
}
