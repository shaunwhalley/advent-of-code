const fs = require('fs');

const inputs = fs.readFileSync('inputs/day04.txt', 'utf8').split('\n\n').map(p => p.split('\n').join(' '));

function partOne(inputs) {
  const expectedFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid','cid'];

  return inputs.reduce((total, passport) => {
    const fieldNames = passport.split(' ').map(field => field.split(':')[0]);
    const missingFields = expectedFields.filter(field => fieldNames.indexOf(field) < 0);

    if (missingFields.length === 0 || (missingFields.length === 1 && missingFields[0] === 'cid')) {
      return total + 1;
    }

    return total;
  }, 0);
}

function partTwo(inputs) {
  const expectedFields = {
    'byr': (val) => Number(val) >= 1920 && Number(val) <= 2002,
    'iyr': (val) => Number(val) >= 2010 && Number(val) <= 2020,
    'eyr': (val) => Number(val) >= 2020 && Number(val) <= 2030,
    'hgt': (val) => val.match(/^((15[0-9]|1[6-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in)$/),
    'hcl': (val) => val.match(/^#[a-f0-9]{6}$/),
    'ecl': (val) => val.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/),
    'pid': (val) => val.match(/^[0-9]{9}$/)
  }

  return inputs.reduce((total, passport) => {
    const fields = passport.split(' ').map(field => field.split(':'));

    const invalidFields = Object.entries(expectedFields).filter(expectedField => {
      const field = fields.find(field => field[0] === expectedField[0]);

      return !field || !expectedField[1](field[1]);
    });

    return invalidFields.length === 0 ? total + 1 : total;
  }, 0);
}

console.log(`Part one answer: ${partOne(inputs)}`);
console.log(`Part two answer: ${partTwo(inputs)}`);

module.exports.partOne = partOne;
module.exports.partTwo = partTwo;
