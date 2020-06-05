 // create an function that removes duplicates from array and 
 //returns a new array with the duplicates removed.
function removeDups(arr) {

    if (arr.length === 0) {
        return [];
    }
    // create a new array
    var newArr =  [];
    // sort the array
    var sortedArr = arr.sort(); // [1, 2, 3, 3, 4, 4]
    
    // go through every item in the sorted array
    for (var i = 0; i < sortedArr.length; i++) {

        var seen = sortedArr[i];
        var nextNum = sortedArr[i + 1];

        if (seen !== nextNum) {
            newArr.push(seen);
        }
    }
    return newArr;
}
console.log(removeDups([])); // []
console.log(removeDups([4, 2, 3, 3, 4, 1])); //[4, 2, 3, 1]
console.log(removeDups([2, 2, 2, 2])); // [2]
console.log(removeDups([1, 2, 2, 3, 4, 5]));
console.log(removeDups([0, 0, 5, 4, 3, 2, 1, 1]));
// console.log(removeDups())


 // step 2: check if the input is valid if not throw an exception (google it)
