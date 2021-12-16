n = int(input())
arr = list(map(int, input().split()))
ans = [-1] * n
for i in range(n):
    for j in range(i + 1, n):
        if arr[j] > arr[i]:
            ans[i] =arr[j]
            break
    print(ans[i], end=' ')