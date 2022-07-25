function sumAll(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let sum = 0;

  for (let index = arr[0]; index <= arr[arr.length - 1]; index++) {
    sum += index;
  }
  console.log(sum);
}

sumAll([5, 10]);


//in this challenge, I needed to find the sum of the numbers in the array, as well as all the numbers between the two. I thought long and hard only to realize, this was ideally, finding the sum of all the numbers between the first and second number. My approach was to first sort the array so that it'd be in ascending order, then loop through the array using a for-loop. index would be the first number of the array, and the condition would be as long as the index is equal to or less than thre second number in the array. I declared a variable to hold the sum of the numbers, and on line 9, used the addition assignement operator to get the cumulative sum. 


