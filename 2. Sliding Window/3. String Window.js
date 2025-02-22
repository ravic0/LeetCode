const s1 = "abcsaqbcqsab";
const s2 = "sab";

// const s1 = "abcsabcqsa";
// const s2 = "ssaqb";

// const s1 = "fizzbuzz";
// const s2 = "fuzz";

const StringWindow = (s1, s2) => {
  const patternMap = new Map();
  const stringMap = new Map();
  let start = 0;
  let minSoFar = Number.MAX_VALUE;
  let startIdx = -1;
  let cnt = 0;
  let windowSize;

  for (const letter of s2) {
    if (patternMap.has(letter))
      patternMap.set(letter, patternMap.get(letter) + 1);
    else patternMap.set(letter, 1);
  }

  console.log(patternMap.keys(), " ", patternMap.values());

  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];

    if (stringMap.has(letter)) stringMap.set(letter, stringMap.get(letter) + 1);
    else stringMap.set(letter, 1);

    if (
      patternMap.has(letter) &&
      stringMap.get(letter) <= patternMap.get(letter)
    )
      cnt++;

    console.log("count: ", cnt, " for letter: ", letter);

    if (cnt === s2.length) {
      // start contracting the window because this may not be the shortest window
      // contraction happens if current letter not part of pattern or has higher frequency than in the pattern

      while (
        !patternMap.has(s1[start]) ||
        stringMap.get(s1[start]) > patternMap.get(s1[start])
      ) {
        console.log(
          "Contracting: ",
          s1[start],
          " at start: ",
          start,
          " i: ",
          i
        );
        stringMap.set(s1[start], stringMap.get(s1[start]) - 1);
        start++;
      }

      windowSize = i - start + 1;
      console.log("------------------- Changing window size");
      console.log("i: ", i);
      console.log("windowSize: ", windowSize);
      if (windowSize < minSoFar) {
        minSoFar = windowSize;
        startIdx = start;
        console.log("Min so far: ", minSoFar);
        console.log("Start idx: ", startIdx);
      }
      console.log("------------------- Done");
    }
  }

  return s1.slice(startIdx, startIdx + minSoFar);
};

console.log(StringWindow(s1, s2));
