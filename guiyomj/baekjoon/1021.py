idx = 0
ans = 0
n,m = map(int, input().split())
queue = [i + 1 for i in range(n)]
arr = list(map(int, input().split()))
while arr:
    x = arr.pop(0)
    tmp = queue.index(x)
    m1 = abs(idx - tmp)
    m2 = len(queue) - m1
    idx_next = min(m1, m2)
    queue.pop(tmp)
    ans += idx_next
    idx = tmp
print(ans)