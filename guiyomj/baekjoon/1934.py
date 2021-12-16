from math import gcd

n = int(input())
for i in range(n):
    a, b = map(int, input().split())
    lcd = a * b // gcd(a, b)
    print(lcd)