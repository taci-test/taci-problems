
function countVowels(str) {
    // create a variable to check for vowels only
    var matches = str.match(/[aeiou]/gi);

    var obj = {};

    if (!matches) {
        return {};
    }

    for (var i = 0; i < matches.length; i++) {

        var key = matches[i];

        if (!(key in obj)) {
            obj[key] = 1;

        } else {
            obj[key] += 1;
        }
    }
    return obj;
}
console.log(countVowels("hello world")); // { e: 1, o: 2 }
console.log(countVowels("happy birthday to you")); // { a: 2, i: 1, o: 2, u: 1 }
console.log(countVowels("SHOUT it out")); // { O: 1, U: 1, i: 1, o: 1, u: 1 }
console.log(countVowels("aieeeeeeeeou")); // { a: 1, i: 1, e: 8, o: 1, u: 1 }
console.log(countVowels("nvwlsnlycnsnnts")); // {}