function sum(a, b) {
  return a + b;
}

// after => will be return
let sum2 = (a, b) => a + b;

function isPrositive(number) {
  return number >= 0;
}

// if only 1 variable we can remove ()

let isPosittive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

let randomnumber = () => Math.random;

document.addEventListener("click", function () {
  console.log("Click");
});

document.addEventListener("click", () => console.log("Click"));
// Great: redefine this keyword
//Arrow functions không ràng buộc this

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow:" + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function:" + this.name);
    }, 100);
  }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()