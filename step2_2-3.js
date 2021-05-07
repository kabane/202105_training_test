var nums = [1, 3, 5, 8, 4];
var nums_4under_sum = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= 4 ) {
    nums_4under_sum += nums[i]
  }
}

console.log(nums_4under_sum)
