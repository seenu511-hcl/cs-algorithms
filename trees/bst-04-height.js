document.write(`
<b>Title:</b> Find the Minimum and Maximum Height of a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> In the last challenge we described a scenario in which a tree could become unbalanced. To understand the concept of balance, let's take a look at another tree
property: <b>height</b>. Height in a tree represents the distance from the root node to any given leaf node. Different paths in a highly branched tree structure may have different heights, but for a given
tree there will be a minimum and maximum height. If the tree is balanced, these values will differ at most by one. This means that in a balanced tree, all the leaf nodes exist within the same <b>level</b>, or
if they are not within the same level they are at most one level apart.<br><br>

The property of balance is important for trees because it is what determines the efficiency of tree operations. As we explained in the last challenge, we face worst case time complexity for heavily unbalanced
trees. Self-balancing trees are commonly used to account for this issue in trees with dynamic data sets. Common examples of these include AVL trees, red-black trees,
and B-trees. These trees all contain additional internal logic which re-balance the tree when insertions or deletions create a state of imbalance.<br><br>

Note: A similar property to height is <b>depth</b>, which refers to how far a given node is from the root node.
`);

document.write(`<br><br>
<b>Instructions:</b> Write two methods for our binary tree: <code>findMinHeight</code> and <code>findMaxHeight</code>. These methods should return an integer value for the minimum and maximum height
within a given binary tree, respectively. If the node is empty let's assign it a height of <code>-1</code> (that's the base case). Finally, add a third method <code>isBalanced</code>
which returns a <code>true</code> or <code>false</code> depending on whether the tree is balanced or not. You can use the first two methods you just wrote to determine this.
`);

// HELPER CODE --------------------------------
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

// SEED CODE --------------------------------
function BinarySearchTree() {
    this.root = null;
    // change code below this line

    // change code above this line
};

// SOLUTION CODE --------------------------------
function BinarySearchTree() {

    this.root = null;
    
    this.isBalanced = () => (this.findMinHeight() > this.findMaxHeight() - 1) ? false : true;
    
    this.findMinHeight = function(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };

    this.findMaxHeight = function(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };

};

// TAIL CODE --------------------------------
BinarySearchTree.prototype = {
    add: function(value) {
        let node = this.root;
        if (node == null) {
          this.root = new Node(value);
          return;
        } else {
            function searchTree(node) {
                if (value < node.value) {
                    if (node.left == null) {
                        node.left = new Node(value);
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left)
                    };
                } else if (value > node.value) {
                    if (node.right == null) {
                        node.right = new Node(value);
                        return;
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    };
                } else {
                    return null;
                };
            };
            return searchTree(node);
        };
    }
};

// TESTS --------------------------------
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), 'The BinarySearchTree data structure exists.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == 'function')})(), 'The binary search tree has a method called findMinHeight.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == 'function')})(), 'The binary search tree has a method called findMaxHeight.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == 'function')})(), 'The binary search tree has a method called isBalanced.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })(), 'The findMinHeight method returns the minimum height of the tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })(), 'The findMaxHeight method returns the maximum height of the tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== 'function') { return false; }; return (test.findMaxHeight() == -1); })(), 'An empty tree returns a height of -1.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.isBalanced(); })(), 'The isBalanced method returns true if the tree is a balanced binary search tree.');
