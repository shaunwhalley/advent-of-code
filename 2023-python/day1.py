import re

validTypedNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
partOneRegex = '[0-9]'
partTwoRegex = '(?=([0-9]|' + '|'.join(validTypedNumbers) + '))'

def get_answer(inputFilePath, regex):
  total = 0

  with open(inputFilePath) as input:
    for line in input:
      numbers = re.findall(regex, line)
      firstNumber = str(validTypedNumbers.index(numbers[0]) + 1) if numbers[0] in validTypedNumbers else numbers[0]
      lastNumber = str(validTypedNumbers.index(numbers[-1]) + 1) if numbers[-1] in validTypedNumbers else numbers[-1]
      total += int(firstNumber + lastNumber)

  return total

print(get_answer('day1-input.txt', partOneRegex))
print(get_answer('day1-input.txt', partTwoRegex))
