const fs = require('fs');

const input = fs.readFileSync('inputs/day06.txt', 'utf8');

const getPeopleByGroup = (input) => input.split('\n\n').map(group => group.split('\n'));

function partOne(input) {
  return getPeopleByGroup(input).reduce((total, group) => {
    const uniqueAnswers = new Set(group.join('').split(''));

    return total + uniqueAnswers.size;
  }, 0);
}

function partTwo(input) {
  return getPeopleByGroup(input).reduce((total, group) => {
    const allAnswers = group.join('');
    const uniqueAnswers = new Set(allAnswers);

    return total + [...uniqueAnswers].reduce((total, answer) => {
      const answerCount = (allAnswers.match(new RegExp(answer, 'g')) || []).length;

      return answerCount === group.length ? total + 1 : total;
    }, 0);
  }, 0);
}

console.log(`Part one answer: ${partOne(input)}`);
console.log(`Part two answer: ${partTwo(input)}`);

module.exports = {
  partOne,
  partTwo
};
