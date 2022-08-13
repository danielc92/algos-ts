// Used to find shortest distance in a weighted graph
// *Weighted graph must contain all positive values
// *Only works for directed acyclic graphs (graphs without cycles)

// graph

interface SomeGraph {
    [key:string]: {
        [key:string]: number
    }
}
const z:SomeGraph = {};

z.start = {};
z.start.a = 6;
z.start.b = 2;
z.a = {};
z.a.fin = 1;
z.b = {};
z.b.a = 3;
z.b.fin = 5;
z.fin = {};

// costs table
interface Costs {[key:string]: number}
const costs : Costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = 9999 ** 9999; // Inf

// parents
const parents : {[key:string]: string | null} = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

const processed: string[] = [];

const findLowestCostNode = (c: Costs) => {
  let lowestCost = 9999 ** 9999;
  let lowestCostNode = null;

  Object.entries(c).forEach((entry) => {
    const nodeName = entry[0];
    const nodeCost = entry[1];
    if ((nodeCost < lowestCost) && (!processed.includes(nodeName))) {
      lowestCost = nodeCost;
      lowestCostNode = nodeName;
    }
  });
  return lowestCostNode;
};

const dijkstra = (graph: SomeGraph) => {
  let node = findLowestCostNode(costs);

  while (node) {
    const cost = costs[node];
    const neighbours = graph[node];
    // eslint-disable-next-line no-loop-func
    Object.keys(neighbours).forEach((key) => {
      const newCost = cost + neighbours[key];
      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = node;
      }
    });

    processed.push(node);
    node = findLowestCostNode(costs);
  }
};

dijkstra(z);

console.log(costs, parents);
