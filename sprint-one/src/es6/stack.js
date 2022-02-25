class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.firstnum = 0;
    this.storage = {};
    this.lastnum = 0;
  }
  push(value) {
    this.counter ++;
    this.lastnum ++;
    this.storage[this.lastnum] = value;
  }
  pop () {
    if (this.counter > 0) {
      var removed = this.storage[this.lastnum];
      delete this.storage[this.lastnum];
      this.lastnum --;
      this.counter --;
      return removed;
    }
  }
  size () {
    return this.counter;
  }
}