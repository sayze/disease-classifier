/**
 * Stage encapsulates the attributes inherit of a valid egfr classification.
 */
export default class Egfr {
  constructor(id = '', label = '') {
    this.id = id
    this.label = label
  }

  toString() {
    return this.label
  }
}

/**
 * Dictionary to keep track of all the possible classifications.
 */
export const readings = Object.freeze({
  NORMAL: new Egfr('kid-norm', 'Normal'),
  MILD_DECREASE: new Egfr('kid-mild-dec', 'Mildly Decreased'),
  MILD_MODERATE: new Egfr('kid-mild-mod', 'Mild to Moderate'),
  MODERATE_SEVERE: new Egfr('kid-mod-severe', 'Moderate to Severe'),
  SEVERE_DECREASE: new Egfr('kid-severe-dec', 'Severely Decreased'),
  SEVERE: new Egfr('kid-severe', 'Kidney Failure'),
})

/**
 * Factory to derive the appropriate classification given egfr.
 * @param {number} eGFR
 * @returns {Egfr}
 */
export function classify(eGFR = 0) {
  if (eGFR >= 90) {
    return readings.NORMAL
  }

  if (eGFR >= 60 && eGFR <= 89) {
    return readings.MILD_DECREASE
  }

  if (eGFR >= 45 && eGFR <= 59) {
    return readings.MILD_MODERATE
  }

  if (eGFR >= 30 && eGFR <= 44) {
    return readings.MODERATE_SEVERE
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
