//Create a function isAlt that accepts a string as an argument 
//and validates whether the vowels (a, e, i, o, u) 
//and consonants are in alternate order.

var vowel = new Set(["a","e","i","o","u"]);

function isAlt(str) {

    
    for (var i = 0; i < str.length - 1; i++) {

        var current = str[i];
        var next = str[i + 1];

        var isCurrentVowel = vowel.has(current);
        var isNextVowel = vowel.has(next);
        
        if ((isCurrentVowel && isNextVowel) || (!isCurrentVowel && !isNextVowel)) {
            return false;
        }  
    }
    return true;
}
isAlt("amazon") // true
// isAlt("apple") // false
// isAlt("banana") // true

