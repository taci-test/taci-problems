function separate(arr) {

    var cats = [];
    var water = [];
    var dogs = [];
    

    for (var i = 0; i < arr.length; i++) {

        var names = arr[i];

        if (names === "cat") {
            cats.push(names);
        } else if (names === "water") {
            water.push(names);
        } else if (names === "dog") {
            dogs.push(names)
        }
    }
    var concat = cats.concat(water, dogs);
    console.log("concat", concat);
    return concat;
}



function separate(arr) {

    arr.sort((a, b) => {

        if (b === "dog") {
            return -1;
        } 
        if (a === "dog") {
            return 1;
        } 
        return a.localeCompare(b);
    });
    console.log("sorted array", arr);
    
}

// separate(['dog','cat','water']) // ['cat','water','dog']

// separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])

// separate(['cat','cat','water','dog','water','cat','water','dog']) 
  // ['cat','cat','cat','water','water','water','dog','dog']

separate(
   ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'dog','water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water'
]) 

//  // ['cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat','cat',
//     'water','water','water','water','water',
//     'water','water','water','water','water','water',
//     'water','water','water', 'dog']