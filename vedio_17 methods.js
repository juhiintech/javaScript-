let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// map()

// function double(nums){
//     return nums*2
// }

let doubles = nums.map((nums) => {
  return nums * 2;
});
console.log(doubles);

// filter()
let number = nums.filter((num) => {
  if (num > 5) {
    return num;
  }
});

console.log(number);
