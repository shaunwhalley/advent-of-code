from numpy import *


def intcode(program):
    output = program.copy()

    for i in range(0, len(output), 4):
        opcode = output[i]

        if opcode == 99:
            break
        else:
            p1 = output[output[i + 1]]
            p2 = output[output[i + 2]]
            p3 = output[i + 3]

            if (opcode == 1):
                output[p3] = p1 + p2
            else:
                output[p3] = p1 * p2

    return output
