// http://www.olympiad.org.uk/programs/morse-code/bio04q3.c
var morseAlphabet = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..'
};

var initial = "dog";

function morse_analysis(message) {
  console.log("Begins analisis");
  var sizeMessage = message.length;
  var charMessage = message.split("");
  var codedMessage = charMessage.reduce(function(acc,char){
    acc.msg += morseAlphabet[char];
    return acc;
  },{msg:""});
  console.log(codeMessage);
}

morse_analysis(initial);
