function forEach(array, callback, context = this) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index], index, array);
  }
}

let arr = [1, 2, 3, 4];


// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");

// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

// ["a", "b", "c"].forEach(function(value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });

let comesAfter = function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
};

forEach(["a", "b", "c"], comesAfter);