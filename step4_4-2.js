var nums = [4, 5, 6, 9];

function isEvenNumber(number) {
  if (number % 2 == 0) {
    console.log(number);
  } else {
    console.log("false");
  }
}

for (let i = 0; i < nums.length; i++) {
  isEvenNumber(nums[i]);
}
