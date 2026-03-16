n = int(input())

a, b = 0, 1
fib = []

for _ in range(n):
    fib.append(a)
    a, b = b, a + b

print(list(map(lambda x: x**3, fib)))