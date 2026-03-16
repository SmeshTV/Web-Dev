def xor(x, y):
    return (x + y) == 1


# Основная часть программы
line = input().split()
x = int(line[0])
y = int(line[1])

print(1 if xor(x, y) else 0)