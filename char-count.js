// write a function which takes in a string 
// and returns counts of each character in the string

// function charCount(str) {
//    // 1. create an object to store our counts.
//     // 2. loop through the string. For each character...
//         // a. If the (lowercase) character is a key in our object, increment the count.
//         // b. If the (lowercase) character is a letter or number not in the object, set as a key with a value of 1.
//         // c. If the character is something else (space, punctuation, etc), don't do anything.
//     // 3. return our object.
// }


function charCount(str) {

    var obj = {}

    for (var i = 0; i < str.length; i++) {

        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1
            }   
        }
    }
    return obj;
}

// console.log(charCount("aaaa")) // { a: 4 }
// console.log(charCount("hello")) // { h:1, e: 1, l: 2, o: 1}
console.log(charCount("Your PIN number is 1234!")) 
/* {   
    1: 1,
    2: 1,
    3: 1, 
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1, 
    r: 2,
    s: 1, 
    u: 2,
    y: 1 
} */


// how to differentiate between upper and lowercase letters in the count?

