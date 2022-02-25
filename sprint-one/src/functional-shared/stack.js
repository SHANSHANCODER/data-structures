var Stack = function() {
  var someInstance = {
    storage: {},
    counter: 0,
    firstnum: 0,
    lastnum: 0
  };
  _.extend(someInstance, stackMethods);
  return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    this.lastnum ++;
    this.counter ++;
    this.storage[this.lastnum] = value;
  },
  pop: function() {
    if (this.counter > 0 ) {
      var removed = this.storage[this.lastnum];
      delete removed;
      this.lastnum --;
      this.counter--;
      return removed;
    }
  },
  size: function() {
    return this.counter;
  }
};


