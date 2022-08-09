/* eslint-disable max-lines-per-function */
function makeCounterLogger(num) {
  let counter = num;
  return function(target) {
    if (target > num) {
      while (counter <= target) {
        console.log(counter);
        counter++;
      }
    } else {
      while (counter >= target) {
        console.log(counter);
        counter--;
      }
    }
  };
}

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

function makeList() {
  let tasks = [];
  return function(task = undefined) {
    // list tasks or log empty message
    if (task === undefined) {
      printList();
    } else {
      addOrRemoveTask(task);
    }

    function printList() {
      if (tasks.length === 0) {
        console.log('The list is empty');
      } else {
        tasks.forEach(task => console.log(task));
      }
    }

    function addOrRemoveTask(task) {
      if (tasks.includes(task)) {
        tasks.splice(tasks.indexOf(task), 1);
        console.log(`${task} removed!`);
      } else {
        tasks.push(task);
        console.log(`${task} added!`);
      }
    }
  };
}

// let list = makeList();

// list(); // The list is empty
// list("make breakfast"); // make breakfast added!
// list("read book"); // read book added!
// list();
// // make breakfast
// // read book
// list("make breakfast"); // make breakfast removed!
// list(); // read book

function makeListObject() {
  return {
    tasks: [],

    list: function() {
      this.tasks.forEach(item => console.log(item));
    },

    add: function(item) {
      this.tasks.push(item);
      console.log(`${item} added!`);
    },

    remove: function(item) {
      if (this.tasks.includes(item)) {
        this.tasks.splice(this.tasks.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        console.log(`${item} is not in the list!`);
      }
    }
  };
}

function makePrivateListObject() {
  let tasks = [];

  return {
    list: function() {
      tasks.forEach(item => console.log(item));
    },

    add: function(item) {
      tasks.push(item);
      console.log(`${item} added!`);
    },

    remove: function(item) {
      if (tasks.includes(item)) {
        tasks.splice(tasks.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        console.log(`${item} is not in the list!`);
      }
    }
  };
}

let list = makePrivateListObject();
list.add('peas'); // peas added
list.list(); // peas
list.add('corn'); // corn added!
list.list(); // peas, corn
list.remove('peas'); // peas removed!
list.list(); // corn

console.log(list.tasks);