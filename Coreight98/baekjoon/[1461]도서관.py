n,m = map(int,input().split())
books,temp = {'negative':[],'positive':[]},[]
for _ in sorted(list(map(int,input().split()))):
    if _ <0:books['negative'].append(_)
    else:books['positive'].append(_)
for i,_ in enumerate(books['negative']):
    if not i%m:temp.append(abs(_))
for i,_ in enumerate(sorted(books['positive'],reverse=True)):
    if not i%m:temp.append(abs(_))
print(sum(_*2 for _ in temp) - max(temp))