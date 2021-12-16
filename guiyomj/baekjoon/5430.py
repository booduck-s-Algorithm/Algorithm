t = int(input())
for i in range(t):
    p = input().replace('RR', '')
    n = int(input())
    arr = eval(input())
    bool_arr = [True] * n
    
    idx_start = 0
    idx_end = n - 1
    is_start = True
    
    try:
        for j in range(len(p)):
            if p[j] == 'R':
                is_start = not is_start
            elif p[j] == 'D':
                if is_start:
                    if not bool_arr[idx_start]: raise Error
                    bool_arr[idx_start] = False
                    idx_start += 1
                else:
                    if not bool_arr[idx_end]: raise Error
                    bool_arr[idx_end] = False
                    idx_end -= 1
        bool_arr = [arr[i] for i in range(n) if bool_arr[i]]
        if not is_start: bool_arr.reverse()
        print(str(bool_arr).replace(' ',''))
    except:
        print('error')