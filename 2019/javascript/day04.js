const input_start = 234208
const input_end = 765869

const meetsRules = (number, groupMatchFunc) => {
  const digits = String(number).split('')

  if (Number(digits.sort().join('')) !== number) return false

  for (const d of new Set(digits)) {
    const count = digits.reduce((t, n) => (n === d ? t + 1 : t), 0)
    if (groupMatchFunc(count)) return true
  }

  return false
}

const numberOfMatches = (matcher) => {
  let matches = 0

  for (n = input_start; n <= input_end; n++) {
    if (meetsRules(n, matcher)) matches++
  }

  return matches
}

const part_one = numberOfMatches((n) => n >= 2)
const part_two = numberOfMatches((n) => n == 2)

console.log(part_one) // 1246
console.log(part_two) // 814
