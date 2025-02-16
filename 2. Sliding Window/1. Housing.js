const plots = [1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2];
const k = 8;

const Housing = (plots, k) => {
  const output = [];
  let start = 0;
  let end = 0;
  let currentPlotSize = plots[start];

  while (end < plots.length) {
    if (currentPlotSize === k) {
      output.push([start, end]);
    }

    if (currentPlotSize > k) {
      currentPlotSize -= plots[start];
      start++;
      continue;
    }

    currentPlotSize += plots[++end];
  }

  return output;
};

console.log(Housing(plots, k));
