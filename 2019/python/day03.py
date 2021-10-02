def get_wire_coords(wire):
    coords = [0, 0]

    for point in wire.split(','):
        for _ in range(int(point[1:])):
            idx = 0 if point[0] in ('L', 'R') else 1
            coords[idx] += -1 if point[0] in ('L', 'D') else 1

            yield tuple(coords)


with open('inputs/day03.txt') as input:
    wires = [list(get_wire_coords(wire))
             for wire in (line.strip() for line in input)]

intersections = set(wires[0]).intersection(set(wires[1]))

part_one = min((abs(x) + abs(y) for (x, y) in intersections))

part_two = min(sum(wire.index(intersection) + 1 for wire in wires)
               for intersection in intersections)

print(part_one)  # 1285

print(part_two)  # 14228
