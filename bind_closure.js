"use strict";

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

function bind(context, func) {
  return function() {
    func.call(context);
  };
}

boundFunc();
console.log(obj); // { foo: 'bar' }

