const fs = require('fs');

const input = fs.readFileSync('inputs/day08.txt', 'utf8');

const parseInput = input => input.split('\n');

const INSTRUCTION_REGEX = /^(acc|jmp|nop) (.+)$/;

const corruptedOpsMap = {
  'nop': 'jmp',
  'jmp': 'nop',
  'acc': 'acc'
};

function getAcc({ instructions, corruptedOpIndex, returnAccValueBeforeLoop }) {
  const history = new Set();
  let acc = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (history.has(i)) return returnAccValueBeforeLoop ? acc : null;

    history.add(i);

    const [_, op, value] = instructions[i].match(INSTRUCTION_REGEX);
    const updatedOp = i === corruptedOpIndex ? corruptedOpsMap[op] : op;

    if (updatedOp !== 'nop') updatedOp === 'acc' ? acc += parseInt(value) : i += parseInt(value) - 1;
  }

  return acc;
}

function partOne(input) {
  const instructions = parseInput(input);

  return getAcc({ instructions, returnAccValueBeforeLoop: true });
}

function partTwo(input) {
  const instructions = parseInput(input);

  const getFixedAcc = (corruptedOpIndex) => {
    const acc = getAcc({ instructions, corruptedOpIndex });

    return acc ? acc : getFixedAcc(corruptedOpIndex + 1);
  }

  return getFixedAcc(0);
}

console.log(`Part one answer: ${partOne(input)}`);
console.log(`Part two answer: ${partTwo(input)}`);

module.exports = {
  partOne,
  partTwo
};
