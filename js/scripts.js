function pigLatin(speak) {
  var letter = speak.split("").shift();
  var latinWord = speak.split("").splice(1);
  latinWord.push(letter);
  var theWord = latinWord.join('');


  return theWord;
};



$(document).ready(function() {
  $("form#pigPlugin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentenceInput").val();
    var newWord = "";
    var vowels = ['a','e','i','o','u', 'y'];
    var consonants = [ 'b','c','d','f','g','h','j','k','l','m','n','p','qu','r','s','t','v','w','x','z']
    var words = sentence.split(" ");
    var array = []

    for (var x=0; x<words.length; x++) {
      if (words[x][0].toLowerCase() === "y") {
        var newWord = pigLatin(words[x]);
      }
    };









    $('#result').text(newWord);


  });
});
