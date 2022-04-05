const peakIndexInMountainArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.trunc((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

module.exports = {
  peakIndexInMountainArray
};
