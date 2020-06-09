function characterCount(arr) {

    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].length;
        if (obj[key] == null) {
            obj[key] = 1
        } else {
            obj[key] += 1;
        }
    }
    return obj;
}
console.log(characterCount(['apple', 'berry', 'cherry'])) // {5:2, 6:1}
console.log(characterCount(['awe', 'test', 'ready'])) // {3:1, 4:1, 5:1}
console.log(characterCount(['wing', '', 'another', 'time'])) // {4:2, 0:1, 7:1}
console.log(characterCount([])) // {}