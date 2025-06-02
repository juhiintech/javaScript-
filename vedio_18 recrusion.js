// function recursive() {
//   console.log("this is a recursive a function");
//   recursive();
// }
// recursive();

// base condition
function coding(num) {
  if (num === 0) {
    console.log("coding has been done!");
    return;
  } else {
    console.log("i am doing coding");
    coding(num - 1);
  }
}
coding(5);

// factorial=> 5! => 5*4*3*2*1 = 120
// n! = n*n-1*n-2*n-3...1

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  let fact = n * factorial(n - 1);
  return fact;
}
console.log(factorial(5));
