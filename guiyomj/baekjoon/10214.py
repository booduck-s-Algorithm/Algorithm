case = int(input())
for i in range(case):
    y_total, k_total = 0, 0
    for j in range(9):
        y, k = map(int, input().split())
        y_total += y
        k_total += k
    if y_total > k_total: print('Yonsei')
    elif y_total < k_total: print('Korea')
    else: print('Draw')