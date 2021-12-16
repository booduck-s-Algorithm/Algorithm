n, m = map(int, input().split())
arr = list(map(int, input().split()))
start = 1
end = max(arr)
ans = end > m and end - m or 0
while start <= end:
    mid = (start + end) // 2
    tmp = sum(arr[i] > mid and arr[i] - mid or 0 for i in range(n))
    if tmp >= m:
        ans = mid
        start = mid + 1
    else:
        end = mid - 1
print(ans)