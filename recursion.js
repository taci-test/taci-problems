function pow(x, n) {
    console.log("starting", x, n);
    if (n === 1) {
        console.log("returning", x, n);
        return x;
    } else {
        console.log("calling child", x, n);
        var res = pow(x, n - 1);
        console.log("After recursive", x, n);
        return x * res;
    }
}

console.log(pow(3, 5));
// console.log(pow(2, 1));
// console.log(pow("a", 3));
// console.log(pow());
// console.log(pow(5, 3)); 
