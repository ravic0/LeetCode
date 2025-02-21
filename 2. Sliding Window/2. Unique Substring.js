const str = "abcaeba";

const UniqueSubstring = (str) => {
  let largestString = new Set();
  let i = 0,
    j = 0;

  while (i < str.length - 1) {
    const currentLongest = new Set();
    currentLongest.add(str[i]);
    j = i + 1;
    while (!currentLongest.has(str[j])) {
      currentLongest.add(str[j]);
      j++;
    }
    i++;

    if (currentLongest.size > largestString.size)
      largestString = currentLongest;
  }

  return largestString;
};

console.log(UniqueSubstring(str).values());
