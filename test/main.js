const { Point, default: Graph } = require("./../dist/graph/adjacency-matrix");
const { dfs } = require("./../dist/dfs");

const graph = new Graph();

graph
    .addPoint("BAAD")
    .addPoint("A")
    .addPoint("B")
    .addEdge("BAAD", "B", 2)
    .addEdge("C", "D", 3)
    .addEdge("A", "C", 4)
    .addEdge("A", "D", 5)
    .addPoint("E")
    .addPoint("F")


console.log(graph.print());