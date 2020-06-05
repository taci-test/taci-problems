function highestScoringWord(str) {

  var words = str.split(" ");
  var result = "";
  var total = 0;

  for (var i = 0; i < words.length; i++) {

    var splitted = words[i];
    var value = 0;

    for (var j = 0; j < splitted.length; j++) {

      value = value + (splitted.charCodeAt(j) - 96);
    }
    if (value > total) {
      total = value;
      result = splitted;
    }
  }
  return result;
}

highestScoringWord("a b c d e f"); // "f"
highestScoringWord("hello world"); // "world"
highestScoringWord("go ahead make my day"); // "my"
highestScoringWord("there is no place like home"); // "there"
highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"
highestScoringWord("bbb cc f aaaaaa"); // "bbb"
highestScoringWord("this sentence has two highest scoring words"); // "sentence"


// function high(s){
//   let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)
//   );
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }

// high("a b c d e f"); // "f"
// high("hello world"); // "world"
// high("go ahead make my day"); // "my"
// high("there is no place like home"); // "there"
