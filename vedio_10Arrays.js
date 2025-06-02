// let myArr = [1]
// console.log(myArr[2])

//  indexing...
//  .length

// let myArr = [89, 98, 67, 76];
// console.log(myArr[myArr.length - 1]);
// console.log(typeof myArr);

//  nested array
// let arr = [23, "juhi", [(34, "learnCoding", [56, 67])]];
// console.log(arr[1]);

// let num1 = 7;
// let num2 = 7;
// console.log(num1 == num2);

// let arr1 = [60, 87, 90, 66];
// let arr2 = [60, 87, 90, 66];
// console.log(arr1 == arr2);

// concat
let arr3 = arr1.concat(arr2);
console.log(arr3);
// [23, 45, 12, 55];
// console.log(arr3[0]);
// console.log(arr3[1]);
// console.log(arr3[2]);
// console.log(arr3[3]);

// for (let i = 1; i <= arr3.lenth; i++) {
//   console.log(arr3[i]);
// }

for (let varr of arr3) {
  console.log(varr);
}
