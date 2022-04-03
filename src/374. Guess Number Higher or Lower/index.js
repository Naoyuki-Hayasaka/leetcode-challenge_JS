const guessNumber = (n) => {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.trunc((low + high) / 2);
    let result = guess(mid);
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
