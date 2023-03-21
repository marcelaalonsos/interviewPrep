const LinkedList = require("./LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    //we pass variable = Infinity acts as a threshold
    this.queue = new LinkedList();
    //track number of queues
    this.size = 0; //all new queues are empty
    //if we want to make a bounded queue
    this.maxSize = maxSize;
  }

  //hasRoom helper method
  hasRoom() {
    if (this.size >= this.maxSize) {
      return false;
    } else {
      return true;
    }
  }

  //isEmpty helper method
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  //enqueue method
  enqueue(data) {
    //check if queue has room
    if (this.hasRoom()) {
      //use linkedlist method to add data to tail
      this.queue.addToTail(data);
      //size increments by 1
      this.size++;
      //logs a message
      console.log(`Added ${data}! Queue size is now ${this.size}.`);
    } else {
      throw new Error("Queue is full!");
    }
  }

  //dequeue method
  dequeue() {
    //check if queue is not empty
    if (!this.isEmpty()) {
      //store head node in const variable
      const data = this.queue.removeHead();
      //reduce size by 1
      this.size--;
      //log message
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      );
      //return data;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;
