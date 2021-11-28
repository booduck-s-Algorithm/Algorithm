from itertools import combinations
n,m = map(int, input().split())
arr = list(map(int, input().split()))
ans = 0
for i in combinations(arr, 3):
    tmp = sum(i)
    if ans <= tmp <= m:
        ans = tmp
print(ans)