def findSixNum(n):
    while str(n + 1).find('666') < 0:
        n += 1
    return n + 1

n = int(input())

idx = 1
num = 666
while idx < n:
    idx +=1
    num = findSixNum(num)
print(num)