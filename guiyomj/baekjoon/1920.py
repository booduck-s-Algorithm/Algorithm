from bisect import bisect_left, bisect_right
n = int(input())
lst = sorted(list(map(int, input().split())))
m = int(input())
param = list(map(int, input().split()))
for i in range(m):
    ans = bisect_right(lst, param[i]) - bisect_left(lst, param[i])
    print(ans > 0 and 1 or 0)