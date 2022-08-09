// Q1
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// Q2
// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// Q3
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// // let { baz, qux, bar } = foo(1, 2, 3);
// let Foo = foo(1, 2, 3);
// let baz = Foo.baz;
// let quz = Foo.quz;
// let bar = Foo.bar;
// console.log(baz);

// Q4
// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;
// console.log(bar);
// console.log(qux);
// console.log(baz);

// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// // let [ bar, qux, baz ] = result;
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// console.log(bar);
// console.log(qux);
// console.log(baz);

// Q6
// function product(numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product([2, 3, 4, 5]);
// console.log(result);

// Q7
// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// Q8

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// // const { first, second, ...rest } = obj;
// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: obj.rest,
// };

// console.log(first);
// console.log(second);
// console.log(rest);

// Q9

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// Q10

function q10(first, second, third, fourth, last) {
  let middle = [second, third, fourth].sort();
  return {
    first,
    last,
    middle: middle,
  };
}

let arr = ['apple', 'cat', 'zebra', 'dog', 'fish'];
let [ one, two, three, four, five ] = arr;

console.log(q10(one, two, three, four, five));
