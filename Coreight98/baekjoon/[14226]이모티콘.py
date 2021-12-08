s = int(input())
dp = [(1,0,1,0)]
answer,flag = 0,False
for _ in range(1000):
    temp = set()
    for (i,j,copy,is_copy) in dp:
        if i ==s:
            answer = j
            flag = True
            break
        temp.add((i, j + 1, i, 1))
        if is_copy:
            temp.add((i+copy,j+1,copy,is_copy))
        if i>1:
            temp.add((i-1,j+1,copy,is_copy))
    if flag:
        print(answer)
        break
    dp = temp