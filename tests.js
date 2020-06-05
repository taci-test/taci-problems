// // create a function that will return a new array with the duplicates removed OK to use sort
// function removeDuplicates(arr) {

//     var output = [];
//     var sorted = arr.sort();

//     // iterate through sorted array
//     for (var i = 0; i < sorted.length; i++) {

//         var first = arr[i];
//         var next = arr[i + 1];
//         // check if first number is not equal to next number
//         if (first !== next) {
//         // if not equal push into output array
//             output.push(first);
//         }
//     }
//     // return output 
//     return output;
// }
// console.log(removeDuplicates([1, 2, 3, 1, 2, 3, 4])); // [1, 2, 3, 4]
// console.log(removeDuplicates([6, 1, 6, 1, 1])); // [6, 1]

// sorted = [1, 1, 2, 2, 3, 3, 4]
// i = 6
// first = 4
// next = undefined
// output = [1, 2, 3, 4]



// create a function that will return a new arrat with the duplicates removed do not use sort

// function removeDuplicates(arr) {

//     if (arr == null) {
//         return null;
//     }

//     if (arr.length === 0) {
//         return [];
//     }
//     // create an ouput array
//     var output =  [];
//     // create an empty object
//     var obj = {};

//     // iterate through the array
//     for (var i = 0; i < arr.length; i++) {
//         var key = arr[i];
//         // check if current value of i is not in object
//         if (!(key in obj)) {
//             // if arr[i] is not in object, add it to the object variable
//             obj[key] = key;
//             // push arr[i] to the output variable
//             output.push(key);
//         }
//     }
//     // return output
//     return output;
// }
// console.log(removeDuplicates([])) // [];
// console.log(removeDuplicates()) // null;
// console.log(removeDuplicates([6, 4, 3, 6, 4, 1, 1]));
// console.log(removeDuplicates([1, 3, 2, 1, 1, 2]));
// console.log(removeDuplicates([1, 2, 3, 3, 2, 1, 5]));


// create a function that will sum all the duplicates

// function sumDuplicateNumbers(arr) {

//     // create a sum variable
//     var sum = 0;
//     // create an empty object
//     var obj = {};

//     // iterate through the array
//     for (var i = 0; i < arr.length; i++) {
//         var key = arr[i];
//         // add the numbers to the object and set the value to be how many times the number appears
//         if (!(key in obj)) {
//             obj[key] = 1;
//         } else {
//             obj[key] = obj[key] + 1;
//         } 
//         if (obj[key] >= 2) {
//             sum = sum + key;

//         // dont add when see the first 3
//         // add when see the second 3 2x
//         // add 

//         }
//     }
//     return sum;
//   }
//   console.log(sumDuplicateNumbers([1, 2, 2, 3, 3])); //10
//   console.log(sumDuplicateNumbers([])); //output 0
//   console.log(sumDuplicateNumbers([1, 2, 3, 3])); //output 0

//   sum = 3
//   obj = {3:2}
//   i = 1
//   key = 1


// function encode(string) {
  
// }
  
// //   function decode(string) {
// //     return
// //   }


