case = int(input())
a_total, b_total = 100, 100
for i in range(case):
    a, b = map(int, input().split())
    if a > b:
        b_total -= a
    if b > a:
        a_total -= b
print(a_total)
print(b_total)