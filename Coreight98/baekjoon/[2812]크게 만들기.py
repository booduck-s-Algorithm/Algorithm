N, K = map(int, input().split())
number = list(input())
k, stack = K, []
for i in number:
    while k > 0 and stack and stack[-1] < i:
        stack.pop()
        k -= 1
    stack.append(i)
print(''.join(stack[:N-K]))