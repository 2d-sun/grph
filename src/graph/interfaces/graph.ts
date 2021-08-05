//import Point from "./point";

// https://www.geeksforgeeks.org/graph-and-its-representations/
// https://en.wikipedia.org/wiki/Graph_theory#Applications

export default interface Graph {
    addPoint(name: string): this;
    removePoint(name: string): this;

    addEdge(nameX: string, nameY: string, weight?: number): this;
    removeEdge(nameX: string, nameY: string):this;
}