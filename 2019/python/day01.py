import math
from functools import reduce


def calculate_fuel(module):
    fuel = math.floor(int(module) / 3) - 2

    return fuel + calculate_fuel(fuel) if fuel > 0 else 0


with open('inputs/day01.txt') as input:
    modules = input.readlines()
    total_fuel = reduce(lambda sum, module: sum +
                        calculate_fuel(module), modules, 0)
    print(total_fuel)


# Part one answer: 3296560

# Part two answer: 4941976
