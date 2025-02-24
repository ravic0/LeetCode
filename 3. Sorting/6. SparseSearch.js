const arr = ["ai", "", "", "bat", "", "", "car", "cat", "", "", "dog", "", ""];
const wordToFind = "dog";

const SparseSearch = (arr, start, end, wordToFind) => {
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === "") {
    let range = 1;
    while (!arr[mid]) {
      if (
        arr[mid + range] &&
        arr[mid - range] &&
        arr[mid + range] <= arr[mid - range]
      ) {
        mid++;
        break;
      } else if (
        arr[mid + range] &&
        arr[mid - range] &&
        arr[mid + range] > arr[mid - range]
      ) {
        mid--;
        break;
      } else if (arr[mid - range]) {
        mid--;
        break;
      } else if (arr[mid + range]) {
        mid++;
        break;
      }
      range++;
    }
  }

  if (arr[mid] === wordToFind) return mid;

  if (arr[mid] > wordToFind)
    return SparseSearch(arr, start, mid - 1, wordToFind);
  else return SparseSearch(arr, mid + 1, end, wordToFind);
};

console.log(SparseSearch(arr, 0, arr.length - 1, wordToFind));
