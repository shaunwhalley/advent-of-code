import re

config = { 'red': 12, 'green': 13, 'blue': 14 }

def check_is_possible(cubes):
  match=re.search('([0-9]+) (red|green|blue)', cubes)
  return int(match.group(1)) <= config[match.group(2)]

total=0

with open('day2-input.txt') as input:
  for line in input:
    match=re.search('Game ([0-9]+): (.+)', line)
    game=int(match.group(1))
    cube_pulls=match.group(2).replace(';', ',').replace(', ', ',').split(',')
    is_possible=all([check_is_possible(cubes) for cubes in cube_pulls])
    if is_possible:
      total += game

print(total)
