const { Point, default: Graph } = require("../dist/graph/adjacency-matrix");
const { dfs } = require("../dist/dfs");

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


// Adjacency matrix prints
// BAAD | A | B | C | D | E | F | 
//    0 | 0 | 2 | 0 | 0 | 0 | 0 | BAAD
//    0 | 0 | 0 | 4 | 5 | 0 | 0 | A
//    2 | 0 | 0 | 0 | 0 | 0 | 0 | B
//    0 | 4 | 0 | 0 | 3 | 0 | 0 | C
//    0 | 5 | 0 | 3 | 0 | 0 | 0 | D
//    0 | 0 | 0 | 0 | 0 | 0 | 0 | E
//    0 | 0 | 0 | 0 | 0 | 0 | 0 | F