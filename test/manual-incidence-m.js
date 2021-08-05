const { Point, default: Graph } = require("./../dist/graph/incidence-matrix");

const graph = new Graph();

graph
    .addPoint("A")
    .addPoint("B")
    .addPoint("C")
    .addEdge("A", "D")
    .addEdge("D", "E", 2)
    .addPoint("F")


console.log(graph.print());