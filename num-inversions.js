function numInversions(arr) {

    var total = 0;

    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                total ++;
            }
        }
    }
    return total;
}
// numInversions([]); // 0
// numInversions([5]); // 0
// numInversions([1,2]); // 0
// numInversions([2,1]); // 1
// numInversions([1,2,3]); // 0
// numInversions([1,3,2]); // 1
// numInversions([3,1,2]); // 2
// numInversions([3,2,1]); // 3
// numInversions([5,3,4,1,2]); // 8
// numInversions([1,1,1,1]); // 0
numInversions([2,2,1,1]); // 4
// numInversions([3,3,3,2,2,1]); // 11
// numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22