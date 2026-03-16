a = int(input())
b = int(input())

i = 1
while i * i <= b:
    sq = i * i
    if sq >= a:
        print(sq, end=' ')
    i += 1