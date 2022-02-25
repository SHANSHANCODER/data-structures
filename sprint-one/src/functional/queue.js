var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var storage = {};
  var counter = 0;
  var lastnum = 0;
  var firstnum = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // if (Object.keys(storage).length === 0) {
    //   storage["firstnum"] = value; // storage["1"] firstnum=1 != "1" {1:a}
    //   firstnum = lastnum === 1;
    // } else {
    storage[lastnum] = value; // [lastnum] and [`${lastnum}`] both work
    counter ++;
    lastnum ++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var removed = storage[firstnum];
      delete removed;
      firstnum++;
      counter --;
      return removed;
    }

  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
