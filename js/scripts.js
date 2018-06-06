/*Back end */
function letterY(speak) {
  var letter = speak.split("").shift();
  var latinWord = speak.split("").splice(1);
  latinWord.push(letter);
  var theWord = latinWord.join('') + "ay";
  return theWord;
};

function letterQ(speak) {
  var word = speak.split("");
  var letters = word.splice(0,2);
  word.push(letters.join(""))
  var theWord = word.join("") + "ay";
  return theWord;
};

function isVowel(isItVowel) {
  if (isItVowel === 'a'|| isItVowel === 'e'|| isItVowel === 'i'|| isItVowel === 'o'|| isItVowel === 'u') {
    return true;
  } else {
    return false;
  };
};

function isRealVowel(isItVowel) {
  if (isItVowel === 'a'|| isItVowel === 'e'|| isItVowel === 'i'|| isItVowel === 'o'|| isItVowel === 'u' || isItVowel === 'y') {
    return true;
  } else {
    return false;
  };
};

function vowelOne(speak){
  if (speak.length > 1){
    var theWord = speak + 'way';
  } else {
    var theWord = speak + 'ay';
  }
  return theWord;
};

function consonent(speak) {
  var word = speak.split('');
  for (var i=0; i<word.length; i++) {
    if (isRealVowel(word[i].toLowerCase())) {
      var letters = word.splice(i)
      letters.push(word.join(""))
      var theWord = letters.join('') + 'ay'
    };
  };
  return theWord;
};
/* Front end */
$(document).ready(function() {
  $("form#pigPlugin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentenceInput").val();
    var newWord = [];
    var words = sentence.split(" ");
    for (var x=0; x<words.length; x++) {
      if (!isNaN(words[x])) {
        newWord[x] = words[x];
      } else if (words[x] === "") {
        newWord[x] = words[x];
      } else if (words[x][0].toLowerCase() === "y") {
        newWord[x] = letterY(words[x]).toLowerCase();
      } else if (words[x][0] === 'q' && words[x][1] === 'u') {
        newWord[x] = letterQ(words[x]).toLowerCase();
      } else if (isVowel(words[x][0].toLowerCase())) {
        newWord[x] = vowelOne(words[x]).toLowerCase();
      } else if (!isRealVowel(words[x][0].toLowerCase())) {
        newWord[x] = consonent(words[x]);
      };
    };
    $('#result').text(newWord.join(" "));
  });
});
