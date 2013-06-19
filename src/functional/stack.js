var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    storage[size] = value;
    size += 1;
  };

  stack.pop = function(){
    if (size > 0){
      size -= 1;
      var temp = storage[size];
      delete storage[size];
      return temp;
    }
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
