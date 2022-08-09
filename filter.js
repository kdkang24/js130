// Filter

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

function filter(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array) === true) {
      result.push(array[index]);
    }
  }
  return result;
}

// Map
// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function map(array, callback) {
  let mapped = [];
  for (let index = 0; index < array.length; index++) {
    mapped.push(callback(array[index]));
  }
  return mapped;
}

// MapReduce
let numbers = [1, 2, 3, 4, 5];
console.log(mapReduce(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(mapReduce(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(mapReduce(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(mapReduce(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function mapReduce(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(index.reduce(callback));
  }
  return result;
}


// // Reduce
// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

// function reduce(array, callback, initialValue) {
//   let accumulator = initialValue;
//   let index = 0;

//   if (accumulator === undefined) {
//     accumulator = array[0];
//     index = 1;
//   }

//   while (index < array.length) {
//     accumulator = callback(accumulator, array[index]);
//     index++;
//   }

//   return accumulator;
// }