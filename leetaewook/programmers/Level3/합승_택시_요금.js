class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChild(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  peek() {
    return this.heap[0];
  }

  // 먼저 배열의 끝에 넣는다. (완전 이진 트리의 마지막 레벨의 가능한 가장 오른쪽이 됨)
  // Min Heap의 형태를 갖추도록 한다. (heapifyUp 실행)
  push(key, value) {
    // 우선 순위로 쓰일 key와 값으로 쓰일 value를 받는다.
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  }

  // 최소 값을 꺼내고,
  shift() {
    const { length } = this.heap;
    const rootNode = this.heap[0];

    if (length <= 0) return undefined;

    if (length === 1) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop(); // 제일 끝에 있는 노드를 부모로 만든다.
      this.heapifyDown(); // 다시 min heap의 형태를 갖추도록 한다.
    }

    return rootNode;
  }

  // 제일 마지막에 있는 원소를 알맞은 곳으로 끌어 올린다.
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    // 루트 노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key가 마지막에 삽입된 노드의 key보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break를 만났다던가, index가 루트 노드가 된 상황이다.
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  }

  // 제일 처음에 있는 원소를 알맞은 곳으로 끌어 내린다.
  heapifyDown() {
    let index = 0;
    const { length } = this.heap;
    const rootNode = this.heap[index];

    // 계속해서 왼쪽에 자식이 있는 한 검사한다.
    while (this.getLeftChild(index) < length) {
      const leftChildIndex = this.getLeftChild(index);
      const rightChildIndex = this.getRightChild(index);

      // 왼쪽 오른쪽 중 key(우선순위)가 더 작은 값을 찾자.
      // 오른쪽이 존재하며, 오른쪽이 key가 더 작으면 오른쪽을 고르면 된다. 우선 순위가 같으면 왼쪽 고른다.
      const smallerChildIndex =
        rightChildIndex < length && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      // 자식이 key가 더 작다면 자식을 위로 끌어 올린다.
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  }

  get length() {
    return this.heap.length;
  }
}

const dijkstra = (start, graph) => {
  const visits = Array(graph.length).fill(false);
  const distances = Array(graph.length).fill(Infinity);

  const queue = new Heap();
  queue.push(0, start);
  distances[start] = 0;

  while (queue.length) {
    const { key: dist, value: now } = queue.shift();

    if (distances[now] < dist) continue;

    for (const [toNode, toCost] of graph[now]) {
      const newCost = dist + toCost;
      if (newCost < distances[toNode]) {
        distances[toNode] = newCost;
        queue.push(newCost, toNode);
      }
    }
  }

  return distances;
};

const solution = (n, s, a, b, fares) => {
  s--;
  a--;
  b--;

  const graph = Array.from({ length: n }, () => []); // type Graph = [to: string, cost: number][]

  for (const [x, y, cost] of fares) {
    graph[x - 1].push([y - 1, cost]); // x에서 y로 가는 데에 비용이 cost라는 의미
    graph[y - 1].push([x - 1, cost]);
  }

  let minCost = Infinity;
  const fromSCosts = dijkstra(s, graph);

  for (let i in graph) {
    const fromICosts = dijkstra(i, graph);
    minCost = Math.min(minCost, fromSCosts[i] + fromICosts[a] + fromICosts[b]);
  }

  return minCost;
};
