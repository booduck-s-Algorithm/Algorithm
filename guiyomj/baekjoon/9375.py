from math import prod 

n = int(input())
for i in range(n):
    t = int(input())
    closet = dict()
    for j in range(t):
        val, key = input().split()
        if closet.get(key, None) is None:
            closet[key] = 1
        closet[key] += 1
    print(prod(closet.values()) - 1)