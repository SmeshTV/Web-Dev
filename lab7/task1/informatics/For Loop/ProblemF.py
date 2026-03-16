x = int(input())

reversed_num = 0

while x > 0:
    reversed_num = reversed_num * 10 + x % 10
    x //= 10

print(reversed_num)