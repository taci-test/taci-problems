// function removeDuplicatesFromSorted(arr) {

//     var total = 0;
//     var current = null;
//     var count = 0;

//     for (var i = 0; i < arr.length; i++) {

//         if (current !== arr[i]) {
//             current = arr[i];
//             total++;
//             count = 1;
//         } else {
//             count++
//             if (count < 3) {
//                 total++;
//             }
//         }   
//     }
//     console.log("total", total);
//     return total;
// }



// // removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3]); // 5
// removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]); // 8
// // removeDuplicatesFromSorted([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]); // 2
// // removeDuplicatesFromSorted([1, 2, 3, 4, 5, 6]); // 6
// // removeDuplicatesFromSorted([]); // 0




function removeDuplicatesFromSorted(arr) {
  
    var output = [];      
    var total = 0;
  
    for (var i = 0; i < arr.length; i++) {

      var current = arr[i];
      var nextNum = arr[i - 2];
  
      if (current !== nextNum) {
          output.push(current);
      }
    }
    console.log("output length", output.length);
    return output.lenght;
  }
//   removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3]); // 5
  removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]); // 8
//   removeDuplicatesFromSorted([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]); // 2
//   removeDuplicatesFromSorted([1, 2, 3, 4, 5, 6]); // 6
  // removeDuplicatesFromSorted([]); // 0

