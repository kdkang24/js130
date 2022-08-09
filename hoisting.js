// // function declaration on line 7 gets hoisted above the function expression
// // JS calls the foo function then reassigns foo to the function expression

// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

// bar();

// var bar = function() {
//   console.log("foo!");
// };

// function bar() {
//   console.log("foo!");
// };


Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);
