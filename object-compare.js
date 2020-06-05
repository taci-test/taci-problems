function objectCompareArray(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {

        if (!objectCompare(arr1[i], arr2[i])) {
            return false;
        }
    }
    return true;
}

function objectCompareObject(obj1, obj2) {
    
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
         return false;
     }
     for (var key in obj1) {
 
         if (!objectCompare(obj1[key], obj2[key])) {
             return false;
         }
     }
     return true;
 }


function objectCompare(item1, item2) {

    if (Array.isArray(item1) && Array.isArray(item2)) {
        return objectCompareArray(item1, item2);
    } else if (typeof item1 === "object" && typeof item2 === "object") {
        return objectCompareObject(item1, item2);
    } else {
        return item1 === item2;
    }
}

// if is an array compare arrays
// if is an object compare objects
// if other things compare other ways

// objectCompare(
//     [  [1, 2], ], 
//     [  [1, 2]  ]
// )

// var arr1 = [1,2,3,4]
// var arr2 = [1,2,3,4]

// console.log(objectCompare(arr1, arr2)) // true

// var arr3 = [1,2,3,4]
// var arr4 = [4,3,2,1]

// console.log(objectCompare(arr3, arr4)) // false

// var obj1 = {favNum: 22, favColor: "green"}
// var obj2 = {favColor: "green", favNum: 22}

// console.log(objectCompare(obj1, obj2)) // true

// var obj3 = {favNum: 22, favColor: "green"}
// var obj4 = {favNum: 22, favColor: "blue"}

// console.log(objectCompare(obj3, obj4)) // false

var obj5 = {favNumbers: [1,2,3,4]}
var obj6 = {favNumbers: [1,2,3,4]}

console.log(objectCompare(obj5, obj6)) // true

// var obj7 = {favNumbers: [1,2,3,4,5]}
// var obj8 = {favNumbers: [1,2,3,4]}

// console.log(objectCompare(obj7, obj8)) // false



