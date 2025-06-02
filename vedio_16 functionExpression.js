//  funcExp
//  named function
let namedFunc = function name() {
  // block of code
};
namedFunc();

//  anonymous function

let anonymousFunc = function () {
  // block of code
};

anonymousFunc();

//  arrow function

let arrowFunc = (username) => {
  console.log("my name is $ (username}");
};

arrowFunc("juhi")(
  // IIFE = immediately invoked function expression

  function () {
    console.log("this series is good");
  }
)();

// nested function

function outer() {
  console.log("this is inner function");
}
console.log("this is outer function");
inner();

// question 1 swap two numbers

function swapNums(a, b) {
  console.log("before swapping");
  console.log("a", a);
  console.log("b", b);

  let temp = a;
  a = b;
  b = temp;

  console.log("after swapping");
  console.log("a", a);
  console.log("b", b);
}
