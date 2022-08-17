const secondLargestNumber = (arr) => {
  if (arr.length == 0) return null;
  let largestNumber = arr[0];
  let secondLargestNumber;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (
      arr[i] > secondLargestNumber ||
      secondLargestNumber == undefined
    ) {
      secondLargestNumber = arr[i];
    }
  }
  return secondLargestNumber;
};

console.log(secondLargestNumber([12, 5, 7, 17, 8, 0 - 1, 16, 7]));
console.log(secondLargestNumber([22, 5, 7, 2, 1, 15, 16]));
console.log(secondLargestNumber([2,15,22,3,2,16]))

