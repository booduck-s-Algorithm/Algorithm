from math import sqrt
a, b = map(int, input().split())
lst = [1] * (b - a + 1)
zegop = [pow(i, 2) for i in range(2, int(sqrt(b)) + 1)]
for i in range(2, int(sqrt(b)) + 1):
    t = pow(i, 2)
    
for i in range(len(zegop)):
    tmp = (a // zegop[i]) * zegop[i]
    while tmp <= b:
        if tmp >= a: lst[tmp - a] = 0
        tmp += zegop[i]
print(sum(lst))