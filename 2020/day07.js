const fs = require('fs');

const input = fs.readFileSync('inputs/day07.txt', 'utf8');

const BAG_RULE_REGEX = /(.+) bags contain (.+)./
const BAG_CONTENTS_REGEX = /(\d|no)+ (.+) .+/;

const parseInput = (input) => {
  const containers = {}

  input.split('\n').forEach(rule => {
    const [_, parentContainer, contentsRules] = rule.match(BAG_RULE_REGEX);
    const container = {};
    contentsRules.split(',').forEach(contentsRule => {
      const [_, total, childContainer] = contentsRule.match(BAG_CONTENTS_REGEX);
      if (Number(total)) container[childContainer] = total;
    });

    containers[parentContainer] = container;
  });

  return containers;
}

function partOne(input) {
  const allContainers = parseInput(input);

  const recurse = (containers, contains, containersWithShinyGold) => {
    if (!contains.length) return;

    const nextContains = [];
    const nextInputs = containers.filter(container => {
      const [name, childContainers] = container;

      const exists = contains.find(contain => childContainers[contain]);

      if (exists) {
        containersWithShinyGold.add(name);
        nextContains.push(name);
        return false;
      }

      return true;
    });

    return nextContains.length ? recurse(nextInputs, nextContains, containersWithShinyGold) : containersWithShinyGold.size;
  }

  return recurse(Object.entries(allContainers), ['shiny gold'], new Set());
}

function partTwo(input) {
  const allContainers = parseInput(input);

  const recurse = (contains) => {
    const childContainers = Object.entries(allContainers[contains]);

    return childContainers.reduce((total, child) => {
      const [name, value] = child;
      const childTotal = Number(value) + (Number(value) * recurse(name));

      return childTotal + total;
    }, 0);
  }

  return recurse('shiny gold');
}

console.log(`Part one answer: ${partOne(input)}`);
console.log(`Part two answer: ${partTwo(input)}`);

module.exports = {
  partOne,
  partTwo
};
