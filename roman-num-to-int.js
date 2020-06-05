// create a function that takes a roman numerals between 10 - 20 return the interger related to that number
// x 10
// xi 11
// xii 12
// xii 13
// xiv 14
// xv 15
// xvi 16
// xvii 17
// xviii 18
// xix 19
// xx 20

function findInteger(str) {

    var splitString = str.split("");
    
    var sum = 0;
    var x = 10;
    var v = 5;
    var n = 1;

    for (var i = 0; i < str.length; i++) {
        
        if (str[i] >= str[i + 1] || i + 1 === str.length) {

            if (str[i] === "x") {
                sum = sum + x;
            } else if (str[i] === "v") {
                sum = sum + v;
            } else if (str[i] === "i") {
                sum = sum + n;
            }
        } else {
            if (str[i] === "x") {
                sum = sum - x;
            } else if (str[i] === "v") {
                sum = sum - v;
            } else if (str[i] === "i") {
                sum = sum - n;
            }
        } 
    }
    return sum;
}
console.log(findInteger("xii"));




// create a function that takes a roman numerals between 10 - 20 return the interger related to that number
// x 10
// xi 11
// xii 12
// xii 13
// xiv 14
// xv 15
// xvi 16
// xvii 17
// xviii 18
// xix 19
// xx 20

function findInteger(str) {

    var splitString = str.split("");
    
    var sum = 0;
    var x = 10;
    var v = 5;
    var n = 1;

    for (var i = 0; i < str.length; i++) {
        var mult = -1;
        if (str[i] >= str[i + 1] || i + 1 === str.length) {
            mult = 1;
        }

        if (str[i] === "x") {
            sum = sum + (mult * x);
        } else if (str[i] === "v") {
            sum = sum + (mult * v);
        } else if (str[i] === "i") {
            sum = sum + (mult * n);
        }
        
    }
    return sum;
}
console.log(findInteger("xii"));


5 - 7
5 + (-1 * 7)