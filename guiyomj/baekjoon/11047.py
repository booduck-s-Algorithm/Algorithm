n, k = map(int, input().split())
arr = []
ans = 0
for i in range(n):
    tmp = int(input())
    if k >= tmp: arr.append(tmp)
while k > 0:
    num = arr.pop()
    cnt = k // num
    ans += cnt
    k -= num * cnt
print(ans)