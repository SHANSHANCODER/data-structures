class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
    this.lastnum = 0;
    this.firstnum = 0;
  }

  enqueue(value) {
    this.storage[this.lastnum] = value;
    this.lastnum ++;
    this.counter ++;
  }

  dequeue() {
    if (this.counter > 0) {
      var removed = this.storage[this.firstnum];
      delete this.storage[this.firstnum];
      this.firstnum++;
      this.counter --;
      return removed;
    }
  }
  size() {
    return this.counter;
  }

}