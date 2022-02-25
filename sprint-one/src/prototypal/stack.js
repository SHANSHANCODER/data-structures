// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var stackMethods = {};


var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.firstnum = 0;
  someInstance.lastnum = 0;

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

