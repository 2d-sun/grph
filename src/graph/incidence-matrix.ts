// each column represents the edges,
// each row represents the nodes, points, vertex

// example:
//     e1,e2,e3
// const incidenceMatrix = [
//     [1, 1, 0], // point 1
//     [0, 1, 1], // point 2
//     [1, 0, 1]  // point 3
//];

import Point from "./point";
import GraphInterface from "./interfaces/graph";

export default class IncidenceMatrix implements GraphInterface {
    readonly graph: number[][];
    readonly points: Map<string, Point>;
    readonly edges: Map<number, string>;

    constructor(graph: number[][] = []) {
        // todo: validate graph
        this.graph = graph;
        this.points = new Map();
        this.edges = new Map();
    }

    addPoint(name: string) {
        const point = new Point(name, this.points.size);
        if (!this.points.has(point.getName())) {
            this.points.set(point.getName(), point);
            this.graph.push(Array(this.edges.size).fill(0));
        }
        return this;
    }

    removePoint(name: string) {
        // todo: remove all edges at first
        // todo: fix matrix
        const pointToDelete = this.getPoint(name);
        this.graph.splice(pointToDelete.getIndex(), 1);

        this.points.delete(name);
        return this;
    }

    getPoint(name: string) {
        return this.points.get(name);
    }

    addEdge(nameX: string, nameY: string, weight: number = 1) {
        this.addPoint(nameX);
        this.addPoint(nameY);

        const pointX = this.getPoint(nameX)
        const pointY = this.getPoint(nameY);

        this.graph.forEach((i, index) => {
            this.graph[index][this.edges.size] = 
                [pointX.getIndex(), pointY.getIndex()].includes(index) ? weight : 0;
        })

        this.edges.set(this.edges.size, `${nameX}${nameY}`);
        return this;
    }

    removeEdge(nameX: string, nameY: string) {
        const pointX = this.getPoint(nameX)
        const pointY = this.getPoint(nameY);

        // todo fill matrix
        //this.graph[this.points.size * pointX.getIndex() + pointY.getIndex()] = 0;
        return this;
    }

    print(): string {
        let print = ""; 

        this.points.forEach((point: Point) => {
            print += point.getName() + " ";
            print += this.graph[point.getIndex()].join(" ");
            print += "\n";
        });
        return print;
    }
}

export {Point};