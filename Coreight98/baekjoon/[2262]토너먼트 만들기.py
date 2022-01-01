n = int(input())
temp = [2257]+list(map(int,input().split()))+[2257]
result = 0
while n>1:
    index = temp.index(n)
    result += min(abs(temp[index] - temp[index + 1]), abs(temp[index] - temp[index - 1]))
    temp.pop(index)
    n-=1
print(result)