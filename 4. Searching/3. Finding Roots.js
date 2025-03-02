const N = 9000;
const P = 5;

const FindingRoots = (N, P) => {
  let start = 0;
  let end = N;
  let base,
    decimalPower = 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (mid * mid <= N) {
      base = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  while (P > 0) {
    start = 0;
    end = N;
    let mid, decimalAdjuster, power;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      decimalAdjuster = mid / 10 ** decimalPower;
      if ((base + decimalAdjuster) ** 2 <= N) {
        start = mid + 1;
        power = decimalAdjuster;
      } else {
        end = mid - 1;
      }
    }
    base += power;
    decimalPower++;
    P--;
  }

  return base;
};

console.log(FindingRoots(N, P));
