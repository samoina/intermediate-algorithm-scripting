/*
TASK - You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

From MDN - arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function
*/

/*
First Approach. Having looked up what an argument is, I decided to create an array from the first argument, then loop over it, and if it is not equal to the subsequent arguments, push it into the new array. This, however, cannot be used for multiple arguments, and so cannot pass all the test cases
*/
// function destroyer(arr) {
//   let newArr = Array.from(arguments[0]),
//       ansArr = [];

//   for (let index = 0; index < newArr.length; index++) {
//     if(newArr[index] !== arguments[1] && newArr[index] !== arguments[2]){
//       ansArr.push(newArr[index]);
//     }

//   }
//   console.log(ansArr);

// }

// destroyer([3, 5, 1, 2, 2], 2, 3, 5);


//SECOND APPROACH
function destroyer(arr) {
  arr = Array.from(arguments);

  let firstArr = arr.shift(),
      answerArr = [];

  for (let index = 0; index < firstArr.length; index++) {
    if(arr.indexOf(firstArr[index]) === -1){
      answerArr.push(firstArr[index])
    }
  }

  console.log(answerArr);
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");

/*
In my second approach, I used the Array.from() method to get an array from all the arguments, then used shift() method to get rid of the first element (an array) and placed it in a variable. I looped thru this array, and used the indexOf() method on the array containing the remaining arguments [2, 3] to check if it has the specific number in that iteration. If the return value is -1, meaning it is not present, then that is an answer and i push it into the answerArr I had created before.
*/
