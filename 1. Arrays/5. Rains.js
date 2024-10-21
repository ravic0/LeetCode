const array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Breakdown problem to smaller bars and adapt to the bigger problem.
const rains = (array) => {
  let waterContent = 0;
  let left = [];
  let right = [];

  for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
    left.push(Math.max(left[i - 1] ?? 0, array[i]));
    right.push(Math.max(right[i - 1] ?? 0, array[j]));
  }

  right = right.reverse();

  for (let i = 0; i < array.length; i++) {
    waterContent += Math.min(left[i], right[i]) - array[i];
  }

  return waterContent;
};

console.log(rains(array));
