const iaPerfectSquare = (num) => {
  if (num === 1) {
    return true;
  }
  let i = 0;
  let j = Math.trunc(num / 2);
  while (i <= j) {
    let mid = Math.trunc((i + j) / 2);
    if (mid ** 2 === num) {
      return true;
    } else if (mid ** 2 <= num) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return false;
};

module.exports = {
  iaPerfectSquare
};
