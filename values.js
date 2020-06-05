// function values(obj) {

//     var result = [];
//     for (var key in obj) {
//         result.push(obj[key]);
//     }
//     return result;
// }

// var obj = { a: 1, b: 2, c: 3 };
// console.log(values(obj)); // [1,2,3]

// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// console.log(values(obj2)); // ["Matt", "Lane", true]

// var obj3 = {};
// console.log(values(obj3)); // []



// function concat(...arr) { 
    
//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {

//         var value = arr[i];

//         for (var j = 0; j < value.length; j++) {
//             newArr.push(value[j]);
//         }
//     }
//     return newArr;
// }
// // #20
// console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// // console.log(concat([1, 2, 3], [4], [5, 6])); // [1, 2, 3, 4, 5, 6]
// // console.log(concat([1, 2, 3], [4], [5], [6])); // [1, 2, 3, 4, 5, 6]
// // console.log(concat([1], [[2], [3]], [4])); // [1, [2], [3], 4]]



// function shift(arr) {

//     if (arr.length === 0) {
//         return undefined;
//     }
//     var removed = arr[0];
//     arr.splice(0,1);

//     return removed;
// }
// // #15
// var arr = ["a","b","c"];
// console.log(shift(arr)); // "a"
// arr; // ["b","c"]

// var emptyArr = [];
// console.log(shift(emptyArr)); // undefined
// emptyArr.length; // 0



// function swapKeyAndValue(obj, key) {

//     var newObj = Object.assign({}, obj);

//     newObj[obj[key]] = key;
//     delete newObj[key];

//     return newObj;

// }
// var instructor = { name: 'Elie', job: 'Instructor' };

// console.log(swapKeyAndValue(instructor, 'name'));
// // {Elie: 'name', job: "Instructor"}

// // console.log(swapKeyAndValue(instructor, 'job'));
// // // {name: "Elie", Instructor: 'job'}

// function swapKeyAndValue(obj, key) {

//     // create a copy of the object
//     var copy = {...obj};
//     // assign the key to a value in the object copy
//     copy[obj[key]] = key;
//     // delete the key name in the obj
//     delete copy[key];
//     // return the copy
//     return copy;
//     }

// // #23
// var instructor = { name: 'Elie', job: 'Instructor' };
    
// console.log(swapKeyAndValue(instructor, 'name'));
// // {Elie: 'name', job: "Instructor"}

// console.log(swapKeyAndValue(instructor, 'job'));
// // // {name: "Elie", Instructor: 'job'}


// function slice(arr, num1, num2) {

//     // if no third parameter is passed slice until the end of array
//     // if a third parameter is greater than the length of array slice until the end of array

//     if (num2 === undefined || num2 > arr.length) {
//         num2 = arr.length;
//     }
//     // create a new array
//     var newArr = [];
//     // iterate through the array start at the index of the first number
//     // and stop at index of second number
//     for (var i = num1; i < num2; i++) {
//             newArr.push(arr[i]);
//     }
//     return newArr;
// }
// // #19
// // console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [1, 2]
// // console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
// // console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]
// console.log(slice([1, 2, 3, 4, 5], 2, 10)); // [3, 4, 5]

function concat(...args) {

    var newArr = [];

    for (var i = 0; i < args.length; i++) {
        newArr.push(args[i])
    }
    
    return newArr;
}
// console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2, 3], [4], [5], [6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1], [[2], [3]], [4])); // [1, [2], [3], 4]]