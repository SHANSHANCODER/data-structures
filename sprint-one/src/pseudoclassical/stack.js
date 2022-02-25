var Stack = function() {
  this.storage = {};
  this.counter = 0;
  this.lastnum = 0;
  this.firstnum = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function (value) {
  this.counter ++;
  this.lastnum ++;
  this.storage[this.lastnum] = value;
};
Stack.prototype.pop = function () {
  if (this.counter > 0) {
    var removed = this.storage[this.lastnum];
    delete removed;
    this.lastnum --;
    this.counter --;
    return removed;
  }
};
Stack.prototype.size = function () {
  return this.counter;
};
