import re
t = int(input())
p = re.compile('((100+1+)|(01))+')
for i in range(t):
    s = input()
    res = p.fullmatch(s)
    print(res == None and 'NO' or 'YES')