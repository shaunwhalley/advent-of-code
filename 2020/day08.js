const fs = require('fs');

const input = fs.readFileSync('inputs/day08.txt', 'utf8');

const parseInput = input => input.split('\n');

const INSTRUCTION_REGEX = /^(acc|jmp|nop) (.+)$/;

function partOne(input) {
  const instructions = parseInput(input);
  const history = new Set();
  let acc = 0;

  for (let i = 0; i < instructions.length; i++) {
    const [_, action, value] = instructions[i].match(INSTRUCTION_REGEX);

    if (history.has(i)) break;

    history.add(i);

    if (action !== 'nop') action === 'acc' ? acc += parseInt(value) : i += parseInt(value) - 1;
  }

  return acc;
}

function partTwo(input) {
  const instructions = parseInput(input);
  const actionsMap = {
    'nop': 'jmp',
    'jmp': 'nop',
    'acc': 'acc'
  };

  const r = (x) => {
    const history = new Set();
    let acc = 0;
    let infinite = false;

    for (let i = 0; i < instructions.length; i++) {
      const [_, action, value] = instructions[i].match(INSTRUCTION_REGEX);
      const updatedAction = i === x ? actionsMap[action] : action;

      if (history.has(i)) {
        infinite = true;
        break;
      };

      history.add(i);

      if (updatedAction !== 'nop') updatedAction === 'acc' ? acc += parseInt(value) : i += parseInt(value) - 1;
    }

    return infinite ? r(x + 1) : acc;
  }

  return r(0);
}

console.log(`Part one answer: ${partOne(input)}`);
console.log(`Part two answer: ${partTwo(input)}`);

module.exports = {
  partOne,
  partTwo
};
