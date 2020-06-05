// // create a function that will return an array with no more than two duplicates
// function upToDuplicates(arr, num) {

//     var output = [];
//     var obj = {};
//     for (var i = 0; i < arr.length; i++) {

//         var key = arr[i];
//         if (!(key in obj)) {
//             obj[key] = 1;
//         } else {
//             obj[key] += 1;
//         }
//         if (obj[key] <= num) {
//             output.push(key);
//         }
//     }
//     return output;
// }
// console.log(upToDuplicates([1, 1, 2, 1, 1], 3));
// console.log(upToDuplicates([7, 4, 7, 7, 12, 4], 1));
// console.log(upToDuplicates([1, 1, 3, 1, 3, 2, 3], 2));
// console.log(upToDuplicates([1, 1, 1, 1, 1, 1, 1], 5)); // 1,1,1,1,1




// create a function that will return an array with no more than two duplicates
function upToDuplicates(arr) {

    var output = [];
    var obj = {};

    for (var i = 0; i < arr.length; i++) {

        var key = arr[i];

        if (!(key in obj)) {
            obj[key] = 1; 
        } else {
            obj[key] += 1;
        }
        if (obj[key] <= 2) {
            output.push(key);
        }
    }
    
    return output;
}
console.log(upToDuplicates([1, 1, 2, 1, 1]));
// console.log(upToDuplicates([7, 4, 7, 7, 12, 4]));
// console.log(upToDuplicates([1, 1, 3, 1, 3, 2, 3]));
// console.log(upToDuplicates([1, 1, 1, 1, 1, 1, 1])); // 1,1,1,1,1