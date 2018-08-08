//list of words to choose from
var words = ["cow", "horse", "pig", "goat", "llama", "chicken", "duck", "sheep", "goose"];
    console.log(words);
    

    
//generates the current random word
//var currentWord = "cow";
var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log("current word is " + currentWord);

var split = currentWord.split('');
    console.log("word split: " + split);
    
    //document.getElementById("currentWord").innerHTML = "Current Word: " + currentWord;

//allows the user to start to guess the words, by inputting letters and converts them to display in uppercase.
document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();
    console.log(letter);
    document.getElementById("lettersUsed").innerHTML = "Letters Used: " + letter;

   
}

if (currentWord === "cow") {
    document.getElementById("currentWord").innerHTML = ("Current Word: _ _ _");
}

//("Current Word: " + currentWord.split('').join(' '));



//Object for the word cow to get the letters
/*var cow = {
    firstLetter: "c",
    firstLetter: "o",
    firstLetter:"w",

    isCurrentWord: function() {
        document.getElementById("currentWord").innerHTML = "Current Word: _ _ _";

        if (this.firstLetter === "") {
            document.getElementById("currentWord").innerHTML = "C _ _";
        }
        if (this.secondLetter === letter ) {
            document.getElementById("currentWord").innerHTML = "_ O _";
        }
        if (thirdLetter === letter) {
            document.getElementById("currentWord").innerHTML = "_ _ W";
        };
    },
};

//call CurrentWordCow
if (currentWord === "cow") {
    cow.isCurrentWord();
    //document.getElementById("currentWord").innerHTML = "Current Word: _ _ _";
}*/



//select random word from array and display the blanks

//in one div/element start with empty blanks and fill in as user guesses...start with "_ _ _ _ _ _" and change inner html as it adds letters

//update another element/div of letters guessed

//when complete, display picture of animal on screen (and maybe play sound)

//for loop for word length to fill in blank?

//letter array for all alphabet letters?

//function consoleInside(arr) {}

//countdown for guess left
// var guessesLeft = (userInput -1)