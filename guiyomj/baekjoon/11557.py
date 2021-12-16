case = int(input())
for i in range(case):
    dic = []
    n = int(input())
    for j in range(n):
        name, spend = input().split()
        dic.append([name, int(spend)])
    dic.sort(key=lambda x:-x[1])
    print(dic[0][0])