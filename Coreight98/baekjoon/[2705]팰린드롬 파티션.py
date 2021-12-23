def solve(n):
    if dp[n] != -1: return dp[n]
    dp[n] = sum([solve((n-i)//2) for i in range(n) if ((n - i)//2)*2+i == n]) + 1
    return dp[n]
n = int(input())
dp = [-1 for i in range(1001)]
dp[0],dp[1],dp[2],dp[3] = 0,1,2,2
for _ in range(n):
    print(solve(int(input())))