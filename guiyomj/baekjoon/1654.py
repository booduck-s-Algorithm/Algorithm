k, n = map(int, input().split())
arr = []
for i in range(k): arr.append(int(input()))
ans = 0
start = 1
end = max(arr)
while start <= end:
    mid = (start + end) // 2
    if mid == 0: break
    tmp = sum([arr[i] // mid for i in range(k)])
    if tmp >= n:
        ans = mid
        start = mid + 1
    else:
        end = mid - 1
print(ans)