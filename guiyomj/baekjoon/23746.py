n = int(input())
d = dict()
for i in range(n):
    a, b = input().split()
    d[b] = a
s = input()
ans = ''
for i in range(len(s)):
    ans += d[s[i]]
a , b = map(int, input().split())
print(ans[a - 1:b])