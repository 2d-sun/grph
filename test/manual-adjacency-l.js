const { default: Graph } = require("../dist/graph/adjacency-list");

const graph = new Graph();

graph
    .addEdge("A", "B") // removed
    .addEdge("A", "C") // removed
    .addEdge("D", "C") // removed
    .addEdge("C", "G")
    .removeEdge("D", "C")
    .addPoint("DDF")
    .removePoint("A")
    .addEdge("B", "D")
    .addEdge("B", "G")


console.log(graph.print());

// Adjacency list print example
//   B: D -> G
//   C: G
//   D: B
//   G: C -> B
// DDF: