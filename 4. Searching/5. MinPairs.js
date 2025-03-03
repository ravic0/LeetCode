const N = [-1, 5, 10, 20, 3];
const M = [26, 134, 135, 15, 17];

const MinPairs = (N, M) => {
  M.sort((a, b) => {
    if (a < b) return -1;
    return 1;
  });
  let minPair = Number.MAX_VALUE;
  let elements = [];

  for (let i = 0; i < N.length; i++) {
    const element = N[i];
    let lowerBound = -1;
    let start = 0,
      end = M.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      console.log("Mid: ", mid, " i.e. ", M[mid]);
      if (element <= M[mid]) {
        lowerBound = mid;
        end = mid - 1;
      } else start = mid + 1;
    }

    console.log("Checking for ", element, " in ", N);
    console.log("Lowerbound: ", lowerBound, " in ", M, "\n --------------");

    const lowerBoundSum = Math.abs(element - M[lowerBound - 1]);
    const upperBoundSum = Math.abs(element - M[lowerBound]);

    if (lowerBoundSum > upperBoundSum && upperBoundSum < minPair) {
      elements = [element, M[lowerBound]];
      minPair = upperBoundSum;
    } else if (lowerBoundSum < upperBoundSum && lowerBoundSum < minPair) {
      elements = [element, M[lowerBound - 1]];
      minPair = lowerBoundSum;
    }
  }

  return elements;
};

console.log(MinPairs(N, M));
