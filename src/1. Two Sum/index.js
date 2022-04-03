const twoSum = function (nums, target) {
  const obj = {};
  const solutionArr = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in obj) {
      solutionArr.push(obj[diff], i);
    }
    obj[nums[i]] = i;
  }
  return solutionArr;
};

module.exports = {
  twoSum
};
