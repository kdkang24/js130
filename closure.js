function makeMultipleLister(n) {
  return function() {
    let total = n;
    while (total < 100) {
      console.log(total);
      total += n;
    }
  };
}

// let lister = makeMultipleLister(17);
// lister();

let total = 0;
function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

// let bar = foo(2); // returns new function on line 32-35
// let result = bar(3); // returns 6
// result += bar(4); // bar returns 24 (6 * 4), result = 6 + 24 = 30
// result += bar(5); // bar returns 120 (5 * 24), result = 30 + 120 = 150
// console.log(result);

function later(callback, message) {
  return function() {
    callback(message);
  };
}
// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

function later2(func, message) {
  return function(when) {
    func(message, when);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!