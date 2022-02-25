var Queue = function() {
  this.counter = 0;
  this.lastnum = 0;
  this.firstnum = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.lastnum] = value;
  this.lastnum ++;
  this.counter ++;

};
Queue.prototype.dequeue = function () {
  if (this.counter > 0) {
    var removed = this.storage[this.firstnum];
    delete removed;
    this.firstnum ++;
    this.counter --;
    return removed;
  }
};
Queue.prototype.size = function () {
  return this.counter;
};