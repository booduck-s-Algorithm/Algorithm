from math import comb
n = int(input())
for i in range(n):
    a, b = map(int, input().split())
    if a < b:
        print(comb(b, a))
    else:
        print(comb(a, b))