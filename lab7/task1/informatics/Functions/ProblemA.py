def min4(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m

nums = list(map(int, input().split()))
print(min4(nums[0], nums[1], nums[2], nums[3]))