n = int(input())
print('@' * (n + 2))
for i in range(n):
    print('@', end='')
    print(' ' * n, end='')
    print('@')
print('@' * (n + 2))