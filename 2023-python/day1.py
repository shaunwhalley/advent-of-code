import re

partOneAnswer=0

with open('day1-input.txt') as input:
 for line in input:
  numbers = re.findall('[0-9]', line)
  partOneAnswer += int(numbers[0] + numbers[-1])

# 52974
print(partOneAnswer)

partTwoAnswer=0

with open('day1-input.txt') as input:
 for line in input:
  validTypedNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  regex = '(?=([0-9]|' + '|'.join(validTypedNumbers) + '))'
  numbers = re.findall(regex, line)
  firstNumber = str(validTypedNumbers.index(numbers[0]) + 1) if numbers[0] in validTypedNumbers else numbers[0]
  lastNumber = str(validTypedNumbers.index(numbers[-1]) + 1) if numbers[-1] in validTypedNumbers else numbers[-1]

  partTwoAnswer += int(firstNumber + lastNumber)

# 53340
print(partTwoAnswer)
