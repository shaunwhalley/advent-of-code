input_start = 234208
input_end = 765869

def meets_rules(number, exact_pair):
    digits = list(str(number))

    if not digits == sorted(digits): return False

    for d in set(digits):
        if (exact_pair and digits.count(d) == 2) or (not exact_pair and digits.count(d) >= 2): return True

    return False

part_one = len([n for n in range(input_start, input_end + 1) if meets_rules(number = n, exact_pair = False)])
part_two = len([n for n in range(input_start, input_end + 1) if meets_rules(number = n, exact_pair = True)])

print(part_one)  # 1246
print(part_two)  # 814
