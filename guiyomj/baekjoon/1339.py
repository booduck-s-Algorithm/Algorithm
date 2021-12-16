num = 9
ans = 0
t = int(input())
dic = dict()

for i in range(t):
    s = input()
    for j in range(len(s)):
        dic[s[j]] = dic.get(s[j], 0) + pow(10, len(s) - j - 1)
dic = sorted(dic.values(), reverse=True)
for i in range(len(dic)):
    ans += dic[i] * num
    num -= 1
print(ans)