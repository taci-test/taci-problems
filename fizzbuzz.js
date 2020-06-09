function fizzBuzz(num) {

        var output = "";
        
        // if (num % 3 === 0 && num % 5 === 0) {
        //     output += "FizzBuzz";
        // }
        if (num % 3 === 0) {
            output += "Fizz";
        }
        if (num % 5 === 0) {
            output += "Buzz";
        }
        if (!output) {
            output = num;
        }
        return output;
}
console.log(fizzBuzz(6)); // "Fizz"
console.log(fizzBuzz(10)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(16)); // 16
console.log(fizzBuzz(5)); // Buzz
console.log(fizzBuzz(161)); // 161
console.log(fizzBuzz(30)); // "FizzBuzz"