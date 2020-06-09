function fizzBuzz(num) {

    for (var i = 0; i <= num; i++) {

        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return num;
        }
    }
    
}
console.log(fizzBuzz(6)); // "Fizz"
console.log(fizzBuzz(10)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(16)); // 16
console.log(fizzBuzz(5)); // 16
console.log(fizzBuzz(161)); // 16