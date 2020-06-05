function reverse(arr) {
  
    for (var i = 0; i < arr.length / 2; i++) {
        var index = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = index;
    
    }
    return arr;
}
    
// console.log(reverse([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// console.log(reverse([])); // []

var arr = [1, 2, 3];
console.log(reverse(arr)); // [3, 2, 1]
arr; // [3, 2, 1]