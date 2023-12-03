import re

config = { 'red': 12, 'green': 13, 'blue': 14 }

total=0

with open('day2-part1-example.txt') as input:
  for line in input:
    game=int(re.search('Game ([0-9]+)', line).group(1))
    cube_pulls=re.findall('(([0-9]+) (red|green|blue))', line)

    is_possible=all([int(cubes[1]) <= config[cubes[2]] for cubes in cube_pulls])

    if is_possible: total += game

print(total)
