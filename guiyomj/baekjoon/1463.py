n = int(input())
dp = [0] * (n + 1)

for i in range(2, n + 1):
    arr = [dp[i - 1]]
    if i % 2 == 0: arr.append(dp[i // 2])
    if i % 3 == 0: arr.append(dp[i // 3])
    dp[i] = min(arr) + 1
print(dp[n])