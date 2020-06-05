// remove the duplicate numbers from array without using sort

// look at the current index and check to see if the current value is already in the output array
// if number is not in output array, add it to the output array
// if number is already in, do not add it

function removeDups(arr) {

    if (arr == null) {
        return [];
    }

    var output = [];
    for (var i = 0; i < arr.length; i++) {
        // if current value is not already inside the output array, add it to output array
        if (!isInArray(output, arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

// look at the current index and check to see if the current value is already in the output array
function isInArray(arr, num) {

    // go through the elements in the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}
console.log(removeDups([])); // []
console.log(removeDups([6, 7, 3, 1, 3, 6, 4, 1, 6])); // [6, 7, 3, 1, 4]
console.log(removeDups([4, 2, 4, 2, 1])); // [4, 2, 1]
console.log(removeDups([0, 0, 1, 2, 6, 2, 1])); // [0, 1, 2, 6]
console.log(removeDups([8, 1, 0, 1, 8, 4, 8, 0])); // [8, 1, 0, 4]
console.log(removeDups([4, 3, 2, 4])); // [4, 3, 2]



