n = int(input())
lst = sorted(list(map(int, input().split())))
m = int(input())
param = list(map(int, input().split()))
bucket = [0] * 20000001

for i in range(n): 
    bucket[lst[i] + 10000000] += 1
for i in range(m):
    print(bucket[param[i] + 10000000], end=' ')