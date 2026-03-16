v = int(input())
t = int(input())

length = 109

position = (v * t) % length

if position < 0:
    position += length

print(position)