const peakIndexInMountainArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.trunc((left + right) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid - 1] < arr[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
};

module.exports = {
  peakIndexInMountainArray
};
