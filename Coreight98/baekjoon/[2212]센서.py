import sys
n = int(input())
k = int(input())
if k >= n:
    print(0)
    sys.exit()
sensors = sorted(list(map(int,input().split())))
temp = sorted([sensors[_] - sensors[_-1] for _ in range(1,n)])
for _ in range(k-1):
    temp.pop(-1)
print(sum(temp))