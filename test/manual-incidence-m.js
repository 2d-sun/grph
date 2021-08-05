const { Point, default: Graph } = require("./../dist/graph/incidence-matrix");

const graph = new Graph();

graph
    .addPoint("AAAA")
    .addPoint("B")
    .addPoint("C")
    .addEdge("A", "D")
    .addPoint("SomeLongPoint")
    .addEdge("D", "E", 2)
    .addPoint("F")


console.log(graph.print());

// Incedence matrix prints
//          AAAA 0 0
//             B 0 0
//             C 0 0
//             A 1 0
//             D 1 2
// SomeLongPoint 0 0
//             E 0 2
//             F 0 0

