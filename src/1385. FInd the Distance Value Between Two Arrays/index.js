const findTheDistanceValue = (arr1, arr2, d) => {
  return arr1.reduce((acc, a1) => {
    for (const a2 of arr2) {
      console.log("a1: ", a1, "a2: ", a2, "d: ", d, "acc: ", acc);
      if (Math.abs(a1 - a2) <= d) {
        return acc;
      }
    }
    return acc + 1;
  }, 0);
};

module.exports = {
  findTheDistanceValue
};
