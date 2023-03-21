function findNodeRecursively(data, currentNode = this.head) {
  if (currentNode === null) {
    return null;
  } else if (currentNode.data === data) {
    return currentNode;
  } else {
    return this.findNodeRecursively(data, currentNode.next);
  }
}
