// Number ++++++++++++++++++++++++++++
const num = 100;

const num1 = new Number(200.76543);
// console.log(num1.toString())
// console.log(num1.toFixed())
// console.log(num1.toPrecision(5))
// console.log(num1.toLocaleString())

// math +++++++++++++++++++++++++++++++
// console.log(math)

// console.log(math.round(2.845))
// console.log(math.ceil(2.03))
// console.log(math.floor(2.0099))
// console.log(math.min(3,7,5,7,9))
// console.log(math.max(3,7,5,7,9))
// console.log(math.pow(2,3))

const randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);

/*
min = 10
max = 20
*/

let min = 10;
let max = 20;
const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num2);
