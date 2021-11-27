from itertools import combinations
n,m  = map(int, input().split())
nums = [i for i in range(1, n + 1)]
for i in combinations(nums, m):
    for j in range(m):
        print(i[j], end=' ')
    print()