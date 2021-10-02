input_start = 234208
input_end = 765869

def meets_rules(number, group_match_func):
    digits = list(str(number))

    if not digits == sorted(digits): return False

    for d in set(digits):
        if group_match_func(digits.count(d)): return True

    return False

part_one = len([pwd for pwd in range(input_start, input_end + 1) if meets_rules(pwd, lambda n: n >= 2)])
part_two = len([pwd for pwd in range(input_start, input_end + 1) if meets_rules(pwd, lambda n: n == 2)])

print(part_one)  # 1246
print(part_two)  # 814
