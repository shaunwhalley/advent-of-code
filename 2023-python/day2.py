import re

def get_answer(inputFilePath):
  config = { 'red': 12, 'green': 13, 'blue': 14 }
  partOneTotal=0
  partTwoTotal=0

  with open(inputFilePath) as input:
    for line in input:
      game=int(re.search('Game ([0-9]+)', line).group(1))
      cube_pulls=re.findall('(([0-9]+) (red|green|blue))', line)
      cube_pulls_possible = []
      minimums = { 'red': 0, 'green': 0, 'blue': 0 }

      for cubes in cube_pulls:
        number = int(cubes[1])
        colour = cubes[2]

        cube_pulls_possible.append(number <= config[cubes[2]])

        if colour in minimums and minimums[colour]:
          if number > minimums[colour]:
            minimums[colour] = number
        else:
          minimums[colour] = number

      if all(cube_pulls_possible):
        partOneTotal += game

      partTwoTotal += (minimums['red'] * minimums['green'] * minimums['blue'])

  return partOneTotal, partTwoTotal

# 3099, 72970
print(get_answer('day2-input.txt'))
