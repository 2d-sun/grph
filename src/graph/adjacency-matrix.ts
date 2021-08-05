// each column and row represents the nodes, points, vertex,


// example:
//     p1,p2,p3
// const adjacencyMatrix = [
//     0, 1, 0, // point 1
//     0, 0, 1, // point 2
//     1, 0, 0  // point 3
//];


import Point from "./point";
import GraphInterface from "./interfaces/graph";

export default class AdjacencyMatrix implements GraphInterface {
    readonly graph: number[];
    readonly points: Map<string, Point>;
    readonly directed: boolean;

    constructor(graph: number[] = [], directed:boolean = false) {
        // todo: validate graph
        this.graph = graph;
        this.points = new Map();
        this.directed = directed;
    }

    addPoint(name: string) {
        const point = new Point(name, this.points.size);
        if (!this.points.has(point.getName())) {
            this.points.set(point.getName(), point);
            for (let rowIndex=1; rowIndex<this.points.size; rowIndex++) {
                this.graph.splice(this.points.size * rowIndex - 1, 0, 0)
            }
            this.graph.push(...new Array(this.points.size).fill(0));        
        }
        return this;
    }

    removePoint(name: string) {
        // todo: remove all edges at first
        // todo: fix matrix
        this.points.delete(name);
        return this;
    }

    getPoint(name: string): Point {
        return this.points.get(name);
    }

    addEdge(nameX: string, nameY: string, weight: number = 1) {
        this.addPoint(nameX);
        this.addPoint(nameY);

        const pointX = this.getPoint(nameX)
        const pointY = this.getPoint(nameY);

        this.graph[this.points.size * pointX.getIndex() + pointY.getIndex()] = weight;

        if (!this.directed) {
            this.graph[this.points.size * pointY.getIndex() + pointX.getIndex()] = weight;
        } 
        return this;
    }

    removeEdge(nameX: string, nameY: string) {
        const pointX = this.getPoint(nameX)
        const pointY = this.getPoint(nameY);

        this.graph[this.points.size * pointX.getIndex() + pointY.getIndex()] = 0;

        if (!this.directed) {
            this.graph[this.points.size * pointY.getIndex() + pointX.getIndex()] = 0;
        }  
        return this;
    }

    print(): string {
        let print = "";
        const len = this.points.size;
        

        // print head
        const head: string[] = [];
        this.points.forEach(point => {
            head.push(`${point.getName()}`)
        });

        print += head.join(" | ") + " | \n";
        
        // print matrix cells
        this.graph.forEach((i, index) => {
            const column = index % len; // get column length to compensate header's label width
            print += `${new Array(head[column].length - i.toString().length).fill(" ").join("")}${i} | `;
            if ((index + 1) % len === 0) {
                const row = Math.floor(index / len);
                print += head[row];
                print += "\n";
            }
        })
        
        
        return print;
    }
}

export {Point};