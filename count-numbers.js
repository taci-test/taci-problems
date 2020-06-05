function countNumbers(arr) {

    // create a count variable to count numbers
    var count =  0;

    // iterate through the array of strings
    for (var i = 0; i < arr.length; i++) {
        var parsed = parseFloat(arr[i]);
        // check if current value is integer
        if (!Number.isNaN(parsed)) {
            // add the number to count
            count++;
        }
    }
    // return count
    return count;
}
console.log(countNumbers([]))
// console.log(countNumbers(['a','b','3','awesome','4'])); // 2
// console.log(countNumbers(['32', '55', 'awesome', 'test', '100'])); // 3
// console.log(countNumbers([])); // 0
console.log(countNumbers(['-4','1.7','0.7', '.9', '0', NaN, '0.0', '', 'NaN'])); // 3
// console.log(countNumbers(['7', '12', 'a', '', '6', '8', ' '])); // 4

// use Number.isInteger
