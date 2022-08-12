class Queue {
    elements: {[key:number]: string}
    head: number
    tail: number

    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element: string) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
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
interface  UserRelationshipGraph {
    [key: string]: string[]
}
let graph: UserRelationshipGraph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

function personIsSeller(n: string) {
    return n.split('')[n.length - 1] === "m"
}

function breadthFirstSearch(name: string, graph: UserRelationshipGraph) {
    let searchQueue = new Queue()
    graph[name].forEach(p => {
        searchQueue.enqueue(p)
    })
   
    let searched: string[] = []

    while (searchQueue.length) {
        let person = searchQueue.dequeue()

        if (!searched.includes(person)) {
            if (personIsSeller(person)){
                console.log(person)
                return true
            } else {
                graph[person].forEach(p => {
                    searchQueue.enqueue(p)
                })
                searched.push(person)
            }

        }
    }
    return false
}

breadthFirstSearch("you", graph)