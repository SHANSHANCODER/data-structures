var Stack = function() {
  var someInstance = {};
  //var firstnum = 0;
  var lastnum = 0;
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  //set up counter, firstnum and lastnum, they will all be zero

  // Implement the methods below
  someInstance.push = function(value) {
    lastnum ++;
    counter ++;
    storage[lastnum] = value;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      var removed = storage[lastnum];
      delete removed;
      lastnum --;
      counter --;
      return removed;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
