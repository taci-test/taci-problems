function minimum(arr) {

    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {

            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        
    }
    return smallest;
}
console.log(minimum([4,3,6,2,1,5]))


function sort(arr) {

    var newArr = [];
    var globalSmallest = 0;
    
    for (var i = 0; i < arr.length; i++) {

        var smallest = 1000;

        for (var j = 0; j < arr.length; j++) {

            if (arr[j] < smallest && arr[j] > globalSmallest) {
                smallest = arr[j];
            }
        }
        newArr.push(smallest);
        globalSmallest = smallest;
    }
    return newArr;
}
console.log(sort([4,3,6,2,1,5]))


function sort(arr) {

    var newArr =  [];
    

    // go through the array
    for (var i = 0; i < arr.length; i++) {

        // find smallest number
        var smallest = arr[0];
    
        // switch the value of the smallest number with the number in the beginning of array
        if (arr[i] < smallest) {
            smallest = arr[i];
            // start at the second index and find the smallest number from the remainding values in the array
            // switch the value of the smallest number with the number in the second index
           
        } 

        // keep looping until the end of the array
        
        newArr.push(smallest);
    }
    return newArr;
}
console.log(sort([4,3,6,2,1,5]))
