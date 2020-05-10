import { format } from 'date-fns'

/**
 * Helper to centralise date formatting.
 * @param {string} strFormat
 */
export default function dateWithFormat(strFormat = 'dd/MM/yyyy', date = new Date()) {
  return format(date, strFormat)
}
