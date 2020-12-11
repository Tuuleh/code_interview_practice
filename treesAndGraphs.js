// Trickier structures to think about because they're three dimensional
// Also time between average scenario and slow scenario can be really big and needs to be taken into consideration
// when weighing off different solutions.

// It's easy to misunderstand tree and graph questions - always ask for clarification and details!

// Binary Tree vs. Binary Search Tree. In Binary search trees, for all nodes, the left children are
// less than or equal to the current node, which is less than all the right nodes.

// Balanced vs. Unbalanced - Ask your interviewer for clarification on this. If the tree is unbalanced, you should
// describe your algorithm in terms of both the average and the worst case time. There are multiple ways to balance
// a tree, and balancing a tree implies only that the depth of subtrees will not vary by more than a certain amount.
// It does not mean that the left and right subtrees are exactly the same size!

// Full and Complete - full and complete trees are trees in which all leaves at the bottom of the tree, and all non-leaf
// nodes have exactly two children. Full and complete trees are extremely rare, as a tree must have exactly 2^n -1
// nodes to meet this condition.


class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert = (data) => {
        if(this.root === null) {
            this.root = new Node(data);
            return;
        }
        this.#insert(data, this.root);
    };

    contains = (data) => {
        if (this.root === null) {
            return false;
        }
        this.#contains(data, this.root);
    };

    printInOrderTraversal() {
        if (this.root === null) {
            console.log("Binary search tree is empty");
            return;
        }
        this.#printInOrderTraversal(this.root);
    }

    printPreOrderTraversal() {
        if (this.root === null) {
            console.log("Binary search tree is empty");
            return;
        }
        this.#printPreOrderTraversal(this.root);
    }

    printPostOrderTraversal() {
        if (this.root === null) {
            console.log("Binary search tree is empty");
            return;
        }
        this.#printPostOrderTraversal(this.root);
    }

    // Private insert method -> protect the actual insert method so that someone cannot just inject any node.
    // The public method is the api method and the private method holds the actual implementation.
    #insert = (data, node) => {
        if(data <= node.data) {
            if(node.left === null) {
                node.left = new Node(data);
                return
            } else {
                this.#insert(data, node.left);
            }
        } else {
            if(node.right === null) {
                node.right = new Node(data);
                return;
            } else {
                this.#insert(data, node.right);
            }
        }

    };

    #contains = (data, node) => {
        if(node.data === data) {
            return true;
        } else if (data < node.data) {
            if (node.left === null) {
                return false;
            } else {
                this.#contains(data, node.left);
            }
        } else {
            if (node.right === null) {
                return false;
            } else {
                this.#contains(data, node.right);
            }
        }
    };

    #printInOrderTraversal = (node) => {
        if (node.left != null) {
            this.#printInOrderTraversal(node.left);
        }
        console.log("inorder node", node.data);
        if(node.right != null) {
            this.#printInOrderTraversal(node.right);
        }
    };

    #printPreOrderTraversal = (node) => {
        console.log("preorder node", node.data);
        if (node.left != null) {
            this.#printPreOrderTraversal(node.left);
        }
        if(node.right != null) {
            this.#printPreOrderTraversal(node.right);
        }
    };

    #printPostOrderTraversal = (node) => {
        if (node.left != null) {
            this.#printPostOrderTraversal(node.left);
        }
        if(node.right != null) {
            this.#printPostOrderTraversal(node.right);
        }
        console.log("postorder node", node.data);
    };

}

export { BinarySearchTree };