const TreeNode = require("./TreeNode");

const tree = new TreeNode(1);
// tree.addChild(15);
// const newChild = new TreeNode(30);
// tree.addChild(newChild);

// console.log(tree);

// tree.removeChild(15);
// console.log(tree);

// tree.removeChild(newChild);
// console.log(tree);

const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].addChild(randomize());
    }
  }
}

// pretty-print the tree
tree.print();
tree.depthFirstTraversal();
tree.breadthFirstTraversal();
