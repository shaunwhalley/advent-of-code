const numberOfMatches = (groupMatchFunc) => {
  const input_start = 234208
  const input_end = 765869
  let matches = 0

  for (num = input_start; num <= input_end; num++) {
    const digits = String(num).split('')
    const uniqueDigits = [...new Set(digits)]

    if (Number(digits.sort().join('')) !== num) continue

    uniqueDigits.some((d) => {
      const count = digits.reduce((t, n) => (n === d ? t + 1 : t), 0)
      if (groupMatchFunc(count)) {
        matches++
        return true
      }
    })
  }

  return matches
}

const partOne = numberOfMatches((n) => n >= 2)
const partTwo = numberOfMatches((n) => n == 2)

console.log(partOne) // 1246
console.log(partTwo) // 814
