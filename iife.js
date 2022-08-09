// (function() {
//   console.log('hello');
// })();                     // => hello

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// Q3

// var sum = 0;
// sum += 10;
// sum += 31;
// console.log(sum);


// sum += (function() {
//   let numbers = [1, 7, -3, 3];
//   return numbers.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })();

// console.log(sum);

// Q4

// (function(num) {
//   while (num >= 0) {
//     console.log(num);
//     num--;
//   }
// })(7);

// Q6

// let bar = (function(start) {
//   let prod = start;
//   return function(factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// Q7

// (function countDown(num) {
//   console.log(num);

//   if (num !== 0) {
//     countDown(num - 1);
//   }
// })(7);

// Merge objects
let foo = { qux: 1, bar: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
console.log(obj);  // => { qux: 1, baz: 3, sup: 4 }