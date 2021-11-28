def addEach(n):
    n = str(n)
    ans = 0
    for i in range(len(n)):
        ans += int(n[i])
    return ans

n = int(input())
size = len(str(n))
ans = n - size * 9
ans = ans > 0 and ans or 0
while ans < n:
    ans += 1
    if ans + addEach(ans) == n:
        break
print(ans + addEach(ans) == n and ans or 0)