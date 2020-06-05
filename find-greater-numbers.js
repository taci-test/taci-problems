function findGreaterNumbers(arr) {

    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                result++;
            }
        }
    }
    return result;
}
// findGreaterNumbers([1,2,3]) // 3 (2 > 1, 3 > 2, and 3 > 1)
// findGreaterNumbers([6,1,2,7]) // 4
// findGreaterNumbers([5,4,3,2,1]) // 0
// findGreaterNumbers([]) // 0