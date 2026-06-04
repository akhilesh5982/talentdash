import { CURRENCY_RATES } from './constants'

export function formatSalary(amount: number, currency: string, displayCurrency: string): string {
  // Convert to INR first
  const inINR = currency === 'INR'
    ? amount
    : amount / 100 * CURRENCY_RATES[currency]

  // Convert from INR to display currency
  const converted = displayCurrency === 'INR'
    ? inINR
    : inINR / CURRENCY_RATES[displayCurrency]

  if (displayCurrency === 'INR') {
    if (converted >= 10000000) return `₹${(converted / 10000000).toFixed(2)} Cr`
    if (converted >= 100000) return `₹${(converted / 100000).toFixed(2)} L`
    return `₹${converted.toLocaleString('en-IN')}`
  }

  const symbol = displayCurrency === 'USD' ? '$'
    : displayCurrency === 'GBP' ? '£' : '€'
  return `${symbol}${Math.round(converted).toLocaleString()}`
}