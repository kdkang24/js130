// function delayLog() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(function() {
//       console.log(i)
//     }, i * 1000)
//   }
// }

// delayLog();

//Q3
// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);


//Q4
// setTimeout(function() {
//   setTimeout(function() {
//     q();
//   }, 15);

//   d();

//   setTimeout(function() {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(function() {
//   s();
// }, 20);

// setTimeout(function() {
//   f();
// });

// g();

// g(), f(), d(), z(), n(), s(), q()



//Q5

function afterNSeconds(callback, duration) {
  setTimeout(callback, duration * 1000);
}



afterNSeconds(() => console.log('hello'), 3);


