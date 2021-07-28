const { Point, default: Graph } = require("./../dist/graph/adjacency-matrix");
const { dfs } = require("./../dist/dfs");

const graph = new Graph();

graph
    .addPoint("BAAD")
    .addPoint("A")
    .addPoint("B")
    .addEdge("C", "D", 3)
    .addEdge("A", "C")
    .addEdge("A", "D")
    .addPoint("E")


console.log(graph.print());