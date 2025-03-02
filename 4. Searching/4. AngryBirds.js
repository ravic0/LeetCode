const N = 5; // nests
const B = 3; // birds
const nest = [1, 2, 4, 8, 9];

const canPlaceBirds = (B, nest, distance) => {
  let birdsPlacedSoFar = 1;
  let lastBirdLocation = 0;

  for (let i = 1; i < nest.length; i++) {
    console.log(
      "Checking for ",
      nest[i],
      " and ",
      nest[lastBirdLocation],
      " are valid for ",
      distance
    );
    if (nest[i] - nest[lastBirdLocation] >= distance) {
      console.log("Valid. Last bird location: ", i);
      lastBirdLocation = i;
      birdsPlacedSoFar++;

      if (birdsPlacedSoFar === B) break;
    }
  }
  console.log("Birds placed: ", birdsPlacedSoFar);
  return birdsPlacedSoFar === B;
};

const AngryBirds = (N, B, nest) => {
  let start = 0;
  let end = nest[N - 1] - nest[0]; // max difference between birds
  let ans;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    console.log("Mid: ", mid);
    if (canPlaceBirds(B, nest, mid)) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return ans;
};

console.log(AngryBirds(N, B, nest));
