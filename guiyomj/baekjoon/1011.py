t = int(input())
for i in range(t):
    a, b = map(int, input().split())
    n = b - a
    
    ans = 0
    offset = 1
    num = 0
    step = 0
    while n > num:
        if step == 2:
            step = 0
            offset += 1
        ans += 1
        step += 1
        num += offset
    print(ans)