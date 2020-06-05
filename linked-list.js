// var obj1 = {
//     value: "taci",
//     next: obj4,
// }
// var obj2 = {
//     value: "vlad",
//     next: obj1,
// }
// var obj3 = {
//     value: "noodle",
//     next: obj2,
// }
// var obj4 = {
//     value: "frog",
//     next: obj5,
// }
// var obj5 = {
//     value: "potato",
//     next: null,
// }

// var start = obj3;
// start.value;
// start.next.next.value

// create a function that takes two parameters start and value
function addToLinkedList(curr, value) {

    var node = {
        value: value,
        next: null,
    };
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = node;
}


function isInList(node, value) {
    while (node.value !== value) {
        node = node.next;
    }
    return true;
}

var start = {
    value: "frog",
    next: null,
}

//var start = { value: "frog", next: node1 }
addToLinkedList(start, "potato");
//var node1 = { value: "potato", next: node2 }

console.log("expected", "potato", "actual", start.next.value);

addToLinkedList(start, "tomato")
//var node2 = { value: "tomato", next: null }

console.log("expected", "tomato", "actual", start.next.next.value);


console.log(isInList(start, "potato"), "true");
console.log(isInList(start, "balls"), "false");

// start is a node that has a value and next
// the value parameter is a name
// the function will add the value to the end of the link list