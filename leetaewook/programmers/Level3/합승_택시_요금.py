import heapq

INF = 10 ** 10


def dijkstra(start, graph):
    distances = [INF for _ in range(len(graph))]
    queue = []
    heapq.heappush(queue, (0, start))
    distances[start] = 0

    while queue:
        dist, now = heapq.heappop(queue)

        if distances[now] < dist:
            continue

        for toNode, toCost in graph[now]:
            newCost = toCost + dist
            if newCost < distances[toNode]:
                distances[toNode] = newCost
                heapq.heappush(queue, (newCost, toNode))

    return distances


def solution(n, s, a, b, fares):
    minCost = INF
    graph = [[] for _ in range(n + 1)]

    for x, y, cost in fares:
        graph[x].append((y, cost))
        graph[y].append((x, cost))

    fromSCosts = dijkstra(s, graph)

    for i in range(n + 1):
        fromICosts = dijkstra(i, graph)
        minCost = min(minCost, fromSCosts[i] + fromICosts[a] + fromICosts[b])

    return minCost
