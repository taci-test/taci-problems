function dedupe(arr) {

    var output = [];
    // create an empty object
    var obj = {};
    // iterate through the array
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        // check if key is not in object
        if (!(key in obj)) {
            obj[key] = key;
            output.push(key);
        } 
    }
    return output;
}
// console.log(dedupe([2, 4, 5, 2, 3, 2]));
console.log(dedupe([6, 2, 1, 2, 6]));
// console.log(dedupe([3, 1, 3, 1]));
// console.log(dedupe([]));
