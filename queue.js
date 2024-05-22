/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val); // Create a new node with the given value
    if (this.isEmpty()) { // If the queue is empty
      this.first = newNode; // Set both first and last to the new node
      this.last = newNode;
    } else {
      this.last.next = newNode; // Link the current last node to the new node
      this.last = newNode; // Update the last to the new node
    }
    this.size++; // Increment the size of the queue
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const newNode = new Node(val); // Create a new node with the given value
    if(this.isEmpty()){
      throw new Error('Queue is empty')
    }
    const removedNode = this.first; // Store the current first node
    this.first = this.first.next; // Update the first to the next node
    if (!this.first) { // If the queue becomes empty
      this.last = null; // Update last to null
    }
    this.size--; // Decrement the size of the queue
    return removedNode.val; // Return the value of the removed node

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.isEmpty()) { // Check if the queue is empty
      // Throw an error if the queue is empty
      throw new Error("Cannot peek at an empty queue");
    }
    return this.first.val; // Return the value of the first node
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    // Check if the size of the queue is 0; if it is, return true indicating the queue is empty
    return this.size === 0;
  }
}

module.exports = Queue;
