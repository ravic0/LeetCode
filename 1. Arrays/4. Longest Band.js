const array = [
  1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const longestBand = (array) => {
  let longestBand = [];
  const set = new Set();

  for (const el of array) set.add(el);

  for (const el of array) {
    if (set.has(el - 1)) continue;
    else {
      let element = el;
      const currentLongestBand = [];
      while (set.has(element)) {
        currentLongestBand.push(element);
        element++;
      }

      if (currentLongestBand.length > longestBand.length)
        longestBand = Array.from(currentLongestBand);
    }
  }

  return longestBand;
};

console.log(longestBand(array));
