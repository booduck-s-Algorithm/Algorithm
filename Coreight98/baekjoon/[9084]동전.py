t = int(input())
for _ in range(t):
    n = int(input())
    money_list = list(map(int,input().split()))
    m = int(input())
    dp = [0 if i !=0 else 1 for i in range(m+1)]
    for i in money_list:
        for j in range(i,m+1):
            dp[j]+=dp[j-i]
    print(dp[m])