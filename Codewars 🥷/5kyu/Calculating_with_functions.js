// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operation) {
  if (!operation) {
    return 0;
  } else {
    return operation(0);
  }
}
function one(operation) {
  if (!operation) {
    return 1;
  } else {
    return operation(1);
  }
}
function two(operation) {
  if (!operation) {
    return 2;
  } else {
    return operation(2);
  }
}
function three(operation) {
  if (!operation) {
    return 3;
  } else {
    return operation(3);
  }
}
function four(operation) {
  if (!operation) {
    return 4;
  } else {
    return operation(4);
  }
}
function five(operation) {
  if (!operation) {
    return 5;
  } else {
    return operation(5);
  }
}
function six(operation) {
  if (!operation) {
    return 6;
  } else {
    return operation(6);
  }
}
function seven(operation) {
  if (!operation) {
    return 7;
  } else {
    return operation(7);
  }
}
function eight(operation) {
  if (!operation) {
    return 8;
  } else {
    return operation(8);
  }
}
function nine(operation) {
  if (!operation) {
    return 9;
  } else {
    return operation(9);
  }
}

function plus(num) {
  return function (x) {
    return x + num;
  };
}
function minus(num) {
  return function (x) {
    return x - num;
  };
}
function times(num) {
  return function (x) {
    return x * num;
  };
}
function dividedBy(num) {
  return function (x) {
    let division = x / num;
    return parseInt(division);
  };
}
