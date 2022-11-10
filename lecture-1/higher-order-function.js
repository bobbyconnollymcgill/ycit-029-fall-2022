// A function that returns a function

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();

console.log(generatedFunc(3));

// A function that accepts another function as an argument

function addBy2(num) {
  return num + 2;
}

function callFunction(func) {
  return func(3);
}

console.log(callFunction(addBy2));

// A function that returns an object with a function as one of its properties
// Example of a closure
function easterEggs() {
  // private variable
  let eggs = 0; // using `let` so that I can mutate it

  return {
    collectEgg: function () {
      eggs++;
    },
    reportEggs: function () {
      return eggs;
    },
  };
}

const game = easterEggs();

game.collectEgg();
game.collectEgg();
game.collectEgg();

const numberOfEggs = game.reportEggs();
console.log(numberOfEggs);

// console.log("taco", eggs); this will give an error since eggs is not defined
