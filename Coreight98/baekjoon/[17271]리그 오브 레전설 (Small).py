n,m = map(int,input().split(' '))
dp = [1 for i in range(10001)]
for i in range(n+1):
    dp[i] = (dp[i-1] + (dp[i-m] if i-m>=0 else 0))%1000000007
print(dp[n])