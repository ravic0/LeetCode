// const str = "aabcbcdbcaaad";
const str = "aabccdabcd";

const smallestDistinctSubstring = (str) => {
  const uniqueChar = new Set();
  const outputMap = new Map();
  let minSoFar = Number.MAX_VALUE;
  let start = 0;
  let count = 0;
  let startIdx = -1;

  for (const letter of str) uniqueChar.add(letter);

  console.log("uniqueChar: ", uniqueChar);

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (!outputMap.has(letter)) {
      outputMap.set(letter, 1);
      count++;
    } else outputMap.set(letter, outputMap.get(letter) + 1);

    // console.log("outputMap: ", outputMap);
    console.log("Count: ", count);
    console.log("Letter: ", letter);

    if (count === uniqueChar.size) {
      console.log("Forming a string:");
      while (outputMap.get(str[start]) > 1) {
        outputMap.set(str[start], outputMap.get(str[start]) - 1);
        start++;
      }

      const windowSize = i - start + 1;
      if (windowSize < minSoFar) {
        minSoFar = windowSize;
        startIdx = start;
      }
    }
  }

  return str.slice(startIdx, startIdx + minSoFar);
};

console.log(smallestDistinctSubstring(str));
