import re

def get_answer(inputFilePath):
  config = { 'red': 12, 'green': 13, 'blue': 14 }
  total=0

  with open(inputFilePath) as input:
    for line in input:
      game=int(re.search('Game ([0-9]+)', line).group(1))
      cube_pulls=re.findall('(([0-9]+) (red|green|blue))', line)

      is_possible=all([int(cubes[1]) <= config[cubes[2]] for cubes in cube_pulls])

      if is_possible: total += game

  return total

# 3099
print(get_answer('day2-input.txt'))
