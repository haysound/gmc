// JavaScript program to find Non-overlapping sum

// function for calculating
// Non-overlapping sum of two array
function findSum(A, B, n) {
  // Insert elements of both arrays
  let hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(A[i])) hash.set(A[i], 1 + hash.get(A[i]));
    else hash.set(A[i], 1);

    if (hash.has(B[i])) hash.set(B[i], 1 + hash.get(B[i]));
    else hash.set(B[i], 1);
  }

  // calculate non-overlapped sum
  let sum = 0;
  for (let entry of hash) {
    if (parseInt(entry[1].toString()) == 1)
      sum += parseInt(entry[0].toString());
  }

  return sum;
}

// JavaScript program to sum uncommon elements

function printSumUncommon(arr1, arr2, n1, n2) {
  let i = 0,
    j = 0,
    k = 0;
  while (i < n1 && j < n2) {
    // If not common, print smaller
    if (arr1[i] < arr2[j]) {
      document.write(arr1[i] + " ");
      i++;
      k++;
    } else if (arr2[j] < arr1[i]) {
      document.write(arr2[j] + " ");
      k++;
      j++;
    }

    // Skip common element
    else {
      i++;
      j++;
    }
  }
  var sum = 0;
  // printing remaining elements
  while (i < n1) {
    document.write(arr1[i] + " ");
    sum = +arr1[i];
    i++;
    k++;
  }
  while (j < n2) {
    document.write(arr2[j] + " ");
    sum = +arr2[j];
    j++;
    k++;
  }
  document.write("The Sum of the above number is : " + sum);
}

let arr1 = [10, 20, 30];
let arr2 = [20, 25, 30, 40, 50];

let n1 = arr1.length;
let n2 = arr2.length;

console.log(printSumUncommon(arr1, arr2, n1, n2));
