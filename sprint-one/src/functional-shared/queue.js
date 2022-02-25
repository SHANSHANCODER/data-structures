var Queue = function() {



  var someInstance = {};
  someInstance.lastnum = 0;
  someInstance.firstnum = 0;
  someInstance.counter = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.lastnum] = value;
  this.lastnum ++;
  this.counter ++;
};
queueMethods.dequeue = function () {
  if (this.counter > 0) {
    var removed = this.storage[this.firstnum];
    delete removed;
    this.firstnum++;
    this.counter --;
    return removed;
  }
};

queueMethods.size = function() {
  return this.counter;

};


