function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.forEach(function(element){
    if(arr2.indexOf(element)=== -1) {
      newArr.push(element)
    }
  });

  arr2.forEach(function(element){
    if(arr1.indexOf(element)=== -1) {
      newArr.push(element)
    }
  });

  console.log(newArr);
}

diffArray(["snuffleupagus", "cookie monster", "elmo"], []);


//In this challenge, I used the indexOf() method which returns -1 if an element is not present. I looped over arr1, and used the indexOf method on arr2 to check if the arr2 contained the specific element from arr1. if not present, I would then push that particular element to the new array. I then repeated this with the second array.