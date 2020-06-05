// looks for the value in the array at current index and return the index
function findIndex(arr, val) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === val) {
            return i;
        }
    }
}

function rankings(arr){

    var copy = [...arr];
    var sorted = copy.sort((a, b) => b - a);
    console.log("sorted", sorted);
    var output = [];

    for (var i = 0; i < arr.length; i++) {

        // look at the current number from the orginal array and assign it to currentNum
        var currentNum = arr[i];
        console.log("currentNum", currentNum);

        var sortedIndex = findIndex(sorted, currentNum);
        console.log("sortedIndex", sortedIndex); 
        
            // push the sortedIndex into an empty array  
            output.push(sortedIndex + 1);
    }
    console.log("output", output);
    return output;
}

// rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
// rankings([100]); // [1]
// rankings([4, 2, 3, 1]); // [1, 3, 2, 4]


