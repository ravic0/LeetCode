// const arr = [
//   [1, 4, 9],
//   [2, 5, 10],
//   [6, 7, 11],
// ];
const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const elementToBeFound = 12;

const StaircaseSearch = (arr, rows, columns, elementToBeFound) => {
  let m = rows - 1;
  let n = 0;

  while (m >= 0 && n < columns) {
    const currentElement = arr[m][n];
    console.log("currentElement: ", currentElement);

    if (currentElement === elementToBeFound) break;

    if (elementToBeFound > currentElement) {
      console.log(currentElement, " > ", elementToBeFound);
      n++;
      console.log("n: ", n);
    } else {
      console.log(currentElement, " < ", elementToBeFound);
      m--;
      console.log("m: ", m);
    }
  }

  if (m < 0 || n >= columns) return [-1, -1];

  return [m, n];
};

console.log(StaircaseSearch(arr, 3, 4, elementToBeFound));
