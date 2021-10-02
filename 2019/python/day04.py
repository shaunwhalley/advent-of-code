input_start = 234208
input_end = 765869

def meets_rules_one(number):
    digits = [int(n) for n in list(str(number))]

    for idx in range(len(digits) - 1):
        if digits[idx + 1] < digits[idx]: return False

    for idx in range(len(digits) - 1):
        if digits[idx] == digits[idx + 1]: return True

    return False

def meets_rules_two(number):
    digits = [int(n) for n in list(str(number))]

    for idx in range(len(digits) - 1):
       if digits[idx + 1] < digits[idx]: return False

    for n in range(0, 10):
        if digits.count(n) == 2: return True

    return False


part_one = len([n for n in range(input_start, input_end + 1) if meets_rules_one(n)])

part_two = len([n for n in range(input_start, input_end + 1) if meets_rules_two(n)])

print(part_one)  # 1246

print(part_two)  # 814
