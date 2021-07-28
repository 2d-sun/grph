// vertice, node, point

import PointInterface from "./interfaces/point";

export default class Point implements PointInterface {
    readonly name: string;
    readonly index: number;

    constructor(name: string, index: number) {
        this.name = name;
        this.index = index;
    }

    getName(): string {
        return this.name;
    }

    getIndex(): number {
        return this.index;
    }

    toString(): string {
        return this.name;
    }

    valueOf(): string {
        return this.name;
    }
}