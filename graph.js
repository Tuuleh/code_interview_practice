import { uuid } from 'uuid';

class Node {
    constructor(data, adjacent = null) {
        this.data = data;
        this.adjacent = adjacent;
        this.id = uuid.v1();
    }
}

class Graph {
    constructor() {
        this.nodeLookup = {};
    };

    getNode = (id) => {
        return this.nodeLookup[id];
    };

    addEdge(data, source, destination) {
        const node = new Node(data, destination);
        this.nodeLookup[node.id] = node;
        this.nodeLookup[source].adjacent = node;

    };

    hasPathDFS = (source, destination) => {
        const nodeSource = this.getNode(source);
        const nodeDestination = this.getNode(destination);
        let visited = {};
        return this.#hasPathDFS(nodeSource, nodeDestination, visited);
    };

    #hasPathDFS = (source, destination, visited) => {
        if(visited.contains(source.id)) {
            return false;
        }
        visited.add(source.id);
        if(source === destination) {
            return true;
        }
    };

}