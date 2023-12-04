import re

def contains_special_char(str):
  return True if str and re.search('[^0-9.a-zA-Z\n]', str) else False

def get_answers(inputFilePath):
  part_one_total = 0

  with open(inputFilePath) as input:
    lines = input.readlines()

    for line_number, line in enumerate(lines):
      matches = re.finditer('([0-9]+)', line)

      if matches:
        for match in matches:
          start = int(match.start()) - 1 if match.start() - 1 >= 0 else 0
          end = int(match.end()) + 1 if match.end() + 1 <= len(line) else len(line)
          current_row = line[start:end]
          previous_row = lines[line_number - 1][start:end] if line_number - 1 >= 0 else None
          next_row = lines[line_number + 1][start:end] if line_number + 1 < len(lines) else None

          if contains_special_char(current_row) or contains_special_char(previous_row) or contains_special_char(next_row):
            print(previous_row, current_row, next_row)
            part_one_total += int(match.group())
          # else:
          #   print(match.group())

  print('total', part_one_total)

get_answers('day3-input.txt')
# get_answers('day3-part1-example.txt')
