import re

validTypedNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

def get_total(numbers):
  firstNumber = str(validTypedNumbers.index(numbers[0]) + 1) if numbers[0] in validTypedNumbers else numbers[0]
  lastNumber = str(validTypedNumbers.index(numbers[-1]) + 1) if numbers[-1] in validTypedNumbers else numbers[-1]

  return int(firstNumber + lastNumber)

def get_answers(inputFilePath):
  part_one_total = 0
  part_two_total = 0

  with open(inputFilePath) as input:
    for line in input:
      part_one_total += get_total(re.findall('[0-9]', line))
      part_two_total += get_total(re.findall('(?=([0-9]|' + '|'.join(validTypedNumbers) + '))', line))

  return part_one_total, part_two_total

# 52974, 53340
print(get_answers('day1-input.txt'))
