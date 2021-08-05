// List of edges list
// Size of list is equal to points number
// Eeach value of array represents edges between nodes

// example:
// 
// const = adjacencyList = {
//  a:   {"b", "c"},
//  b:   {"c", "d"}
//  c:   {"a", "b"}
// }

import GraphInterface from "./interfaces/graph";

type PointType = Array<string|number>;
type GraphOfAdjacencyListType = Map<string|number, PointType>;

export default class AdjacencyList implements GraphInterface {
    readonly graph: GraphOfAdjacencyListType;

    private longestNameLength: number;

    constructor(graph: GraphOfAdjacencyListType = new Map()) {
        // todo: validate graph
        this.graph = graph;

        this.longestNameLength = 0;
    }

    addPoint(name: string) {
        if (!this.graph.has(name)) {
            this.graph.set(name, []);

            // fill longestNameLength. Used to print
            if (this.longestNameLength < name.length) {
                this.longestNameLength = name.length;
            }
        }
        return this;
    }

    removePoint(name: string) {
        this.graph.delete(name);
        this.graph.forEach((adjacencies: PointType) => {
            const i = adjacencies.findIndex(n => n === name);
            if (i >= 0) {
                adjacencies.splice(i, 1);                
            } 
        })
        return this;
    }


    addEdge(nameX: string, nameY: string, weight: number = 1) {
        this.addPoint(nameX);
        this.addPoint(nameY);

        this.graph.get(nameX).push(nameY)
        this.graph.get(nameY).push(nameX)

        return this;
    }

    removeEdge(nameX: string, nameY: string) {
        const nameXLinks = this.graph.get(nameX);
        const nameYLinks = this.graph.get(nameY);

        let indexX = nameXLinks.findIndex(name => name === nameY);
        if (indexX >= 0) nameXLinks.splice(indexX, 1);
        let indexY = nameYLinks.findIndex(name => name === nameX);
        if (indexY >= 0) nameYLinks.splice(indexY, 1);

        return this;
    }

    print(): string {
        let print = ""; 
        this.graph.forEach((adjacencies: PointType, pointName: string) => { 
            print += `${new Array(this.longestNameLength - pointName.length).fill(" ").join("")}${pointName}: ${adjacencies.join(" -> ")}`
            print += "\n";
        });
        return print;
    }
}