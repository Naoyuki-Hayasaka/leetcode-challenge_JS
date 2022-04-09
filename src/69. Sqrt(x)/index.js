const mySqrt = (x) => {
  if (x === 1) return 1;
  let i = 0;
  let j = x;
  while (i < j) {
    let mid = Math.trunc((i + j) / 2);
    if (mid ** 2 === x) {
      return mid;
    } else if (mid ** 2 < x) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return x < j ** 2 ? j - 1 : j;
};

module.exports = {
  mySqrt
};
