class Queue {
  elements: {[key:number]: string};

  head: number;

  tail: number;

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: string) {
    this.elements[this.tail] = element;
    this.tail += 1;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head += 1;
    return item;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

// Build the graph
interface UserRelationshipGraph {
    [key: string]: string[]
}
const graph: UserRelationshipGraph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

function personIsSeller(n: string) {
  return n.split('')[n.length - 1] === 'm';
}

const breadthFirstSearch = (name: string, someGraph: UserRelationshipGraph) => {
  const searchQueue = new Queue();
  someGraph[name].forEach((p) => {
    searchQueue.enqueue(p);
  });

  const searched: string[] = [];

  while (searchQueue.length) {
    // Removes person from queue AND stores in person variable
    const person = searchQueue.dequeue();

    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        return person;
      }
      graph[person].forEach((p) => {
        searchQueue.enqueue(p);
      });
      searched.push(person);
    }
  }
  return false;
};

breadthFirstSearch('you', graph);
