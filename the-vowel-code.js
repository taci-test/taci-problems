function encode(string) {

    var obj = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }

    return convert(string, obj);
}

console.log(encode('hello')); // h2ll4
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(encode(''), '');
console.log(encode(), undefined);
console.log(encode(99), undefined);

function decode(string) {

    var obj = {
        1: "a",
        2: "e",
        3: "i",
        4: "o",
        5: "u"
    }
    return convert(string, obj);
}

function convert(string, obj) {

    if (string == null) {
        return;
    }
    if (typeof string !== "string") {
        return;
    }
    var newString = "";
    // iterate through the string
    for (var i = 0; i < string.length; i++) {
        var key = string[i];
        // check if the key is in the object
        if (obj[key]) {
            // if it is, the value of the character is added in the new string
            newString = newString + obj[key];
        } else {
            newString = newString + key;
        }
    }
    return newString;
    
}
console.log(decode('h2ll4'), 'hello');
console.log(decode(''), '');
console.log(decode(), undefined);