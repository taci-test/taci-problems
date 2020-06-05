function sort(arr) {

    // if array is not an array return null
    if (!Array.isArray(arr)) {
        return null;
    }
    // if empty return [];
    if (arr.length === 0) {
        return [];
    } 
    for (var j = 0; j < arr.length; j++) {
        // create a variable to store smallest value
        var smallestIndex = j;

        // iterate through array
        for (var i = j + 1; i < arr.length; i++) {
            // check if an element in the array is less than smallest
            if (arr[i] < arr[smallestIndex]) {
                // assign element in array to smallest
                smallestIndex = i;
            }
        }  
        // add the value of smallestIndex into arr[0]
        var value = arr[j];
        arr[j] = arr[smallestIndex]; 
        arr[smallestIndex] = value;
    } 
    return arr;
}
console.log(sort([])) // []
console.log(sort([2, 1, 4, 3])) // [1, 2, 3, 4]
console.log(sort([2])) // 2
console.log(sort([3, 3, 3])) // [3, 3, 3]
console.log(sort([4, 4, 2])) // [2, 4, 4]
console.log(sort([1, 2, 3])) // [1, 2, 3]
console.log(sort([3, 4, 1, 0])) // [3, 2, 1]
console.log(sort()) // null

// j = 2
// smallestIndex = 3
// i = 3 3<4
// value = 4
// [0, 1, 3, 4]

