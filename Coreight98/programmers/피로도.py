from itertools import permutations

def solution(k, dungeons):
    answer = -1
    for i in list(permutations(dungeons,len(dungeons))):
        temp = k
        count = 0
        for j,l in i:
            if j <= temp and temp - l >=0:
                temp -=l
                count+=1
        if answer < count:
            answer = count
    return answer