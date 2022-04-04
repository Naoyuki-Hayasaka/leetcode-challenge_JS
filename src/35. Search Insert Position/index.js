const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  if (target < nums[left]) {
    return 0;
  }
  if (nums[right] < target) {
    return nums.length;
  }
  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

module.exports = {
  searchInsert
};
