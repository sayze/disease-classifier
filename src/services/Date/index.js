import { format } from 'date-fns'

/**
 * Helper to centralise date formatting.
 * @param {string} strFormat
 */
export default function dateWithFormat(date = new Date(), strFormat = 'yyyy/MM/dd') {
  return format(date, strFormat)
}
