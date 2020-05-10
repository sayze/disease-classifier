import Classification from '.'

/**
 * Dictionary to keep track of all the possible eGFR classifications.
 */
export const eGFR = Object.freeze({
  NORMAL: new Classification('kid-norm', 'Normal'),
  MILD_DECREASE: new Classification('kid-mild-dec', 'Mildly Decreased'),
  MILD_TO_MODERATE: new Classification('kid-mild-mod', 'Mild to Moderate'),
  MODERATE_TO_SEVERE: new Classification('kid-mod-severe', 'Moderate to Severe'),
  SEVERE_DECREASE: new Classification('kid-severe-dec', 'Severely Decreased'),
  SEVERE: new Classification('kid-severe', 'Kidney Failure'),
})

/**
 * Factory to derive the appropriate classification given egfr.
 * @param {number} eGFRValue
 * @returns {Classification}
 */
export function classifyKidneyDisease(eGFRValue = 0) {
  if (eGFRValue >= 90) {
    return eGFR.NORMAL
  }

  if (eGFRValue >= 60 && eGFRValue <= 89) {
    return eGFR.MILD_DECREASE
  }

  if (eGFRValue >= 45 && eGFRValue <= 59) {
    return eGFR.MILD_TO_MODERATE
  }

  if (eGFRValue >= 30 && eGFRValue <= 44) {
    return eGFR.MODERATE_TO_SEVERE
  }

  if (eGFRValue >= 15 && eGFRValue <= 29) {
    return eGFR.SEVERE_DECREASE
  }

  return eGFR.SEVERE
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
