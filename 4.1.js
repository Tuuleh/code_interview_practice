import { BinarySearchTree } from './treesAndGraphs.js'

let tree = new BinarySearchTree();
const data = [25, 15, 50, 10, 22, 35, 70, 4, 12, 31, 44, 66, 90, 18, 24];

data.forEach( d => {
    tree.insert(d);
});

tree.printInOrderTraversal();
tree.printPreOrderTraversal();
tree.printPostOrderTraversal();