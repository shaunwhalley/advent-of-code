from intcode import intcode


def create_program(input):
    return list(map(lambda n: int(n), input.split(',')))


def part_one(input):
    program = create_program(input)
    program[1] = 12
    program[2] = 2

    return intcode(program)[0]


def part_two(input):
    expected_answer = 19690720
    program = create_program(input)

    for a in range(100):
        for b in range(100):
            program[1] = a
            program[2] = b

            if intcode(program)[0] == expected_answer:
                return 100 * a + b


if __name__ == "__main__":
    with open('inputs/day02.txt') as i:
        input = i.read()

        print(part_one(input))
        print(part_two(input))

# Part one answer: 3306701

# Part two answer: 7621
