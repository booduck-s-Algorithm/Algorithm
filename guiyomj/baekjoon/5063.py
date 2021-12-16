n = int(input())
for i in range(n):
    r, e, c = map(int, input().split())
    ans = e - c - r
    if ans > 0: print('advertise')
    elif ans < 0: print('do not advertise')
    else: print('does not matter')