/**
 * Classification encapsulates the attributes inherent of a valid classification.
 */
export default class Classification {
  constructor(id = '', label = '') {
    this.id = id
    this.label = label
  }

  toString() {
    return this.label
  }
}
