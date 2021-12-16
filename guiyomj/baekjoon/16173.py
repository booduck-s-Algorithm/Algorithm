import sys
sys.setrecursionlimit(10**6)
def search(x, y):
    nx = x + maps[x][y]
    ny = y + maps[x][y]
    if maps[x][y] == -1: return print(res.pop(0))
    if maps[x][y] == 0: return
    if nx < n: search(nx, y)
    if ny < n: search(x, ny)
n = int(input())
maps = []
res = ['HaruHaru', 'Hing']
x, y = 0, 0
for i in range(n): maps.append(list(map(int, input().split())))
search(0, 0)
if len(res) > 1: print(res.pop())