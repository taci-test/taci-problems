// write a function that will turn a string into a number "12" -> 12
function parseNumber(str) {

    if (str == null) {
        return NaN;
    }
    var output = 0;
    for (var i = 0; i < str.length; i++) {
        var parsed = parseInt(str);

        console.log("parsed", parsed);

    }
    console.log("output", output);
    return output;
}
// console.log(parseNumber(""));
// console.log(parseNumber("abc10"));
console.log(parseNumber("12abc"));
// console.log(parseNumber("10.5"));
// "" -> return NAN
// if string with letters and numbers return only the numbers
// if whole numbers return whole numbers
// if decimals return decimasls

// 124
// 1 - 100 -   (1 * 100)   - (1 * 10^2)    0
// 2 + 20 +    (2 * 10)    + (2 * 10^1)    1
// 4 + 4    +  (4 * 1)     + (4 * 10^0)    2