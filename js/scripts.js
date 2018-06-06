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

}

function vowelOne(speak){
  var theWord = speak + 'way';
  return theWord;
}



$(document).ready(function() {
  $("form#pigPlugin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentenceInput").val();
    var newWord = [];
    var vowels = ['a','e','i','o','u', 'y'];
    var consonants = [ 'b','c','d','f','g','h','j','k','l','m','n','p','qu','r','s','t','v','w','x','z']
    var words = sentence.split(" ");
    var array = []
    for (var x=0; x<words.length; x++) {
      if (parseInt(words[x])*2 === parseInt(words[x]) + parseInt(words[x])) {
        newWord[x] = words[x];
      } else if (words[x] === "") {
        newWord[x] = words[x];
      } else if (words[x][0].toLowerCase() === "y") {
        newWord[x] = letterY(words[x]);
      } else if (words[x][0] === 'q' && words[x][1] === 'u') {
        newWord[x] = letterQ(words[x]);
      } else if (words[x][0].toLowerCase() === 'a'||'e'||'i'||'o'||'u') {
        newWord[x] = vowelOne(words[x]);

      }
    };





    $('#result').text(newWord.join(" "));


  });
});
