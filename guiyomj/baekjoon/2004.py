def cnt2(n):
    n2 = 0
    while n > 0:
        n //= 2
        n2 += n
    return n2
 
def cnt5(n):
    n5 = 0
    while n > 0:
        n //= 5
        n5 += n
    return n5

n, m = map(int, input().split())
print(min(cnt2(n) - cnt2(m) - cnt2(n - m), cnt5(n) - cnt5(m) - cnt5(n - m)))