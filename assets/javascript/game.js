//list of words to choose from
var words = ["cow", "horse", "pig", "goat", "llama", "chicken", "duck", "sheep", "goose"];
    console.log(words);

var wordsIndex = 0;

    
//blanks spaces to start game
var blanks = ["_ _ _", "_ _ _ _", "_ _ _ _ _", "_ _ _ _ _ _ _"];
    console.log(blanks);

//tracks number of wins
var wins = 0;


//generates the current random word and makes it all upper case
var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    console.log("current word is " + currentWord);

//splits each word into letters
var split = currentWord.split('');
    console.log("word split: " + split);
    console.log("split length: " + split.length);
   

//Functions====================================================================================

// Function to display word as blanks to start
function renderWord() {
    // If there are still more words, render the next one.
    if (wordsIndex <= (words.length - 1)) {
        //****there has to be a way to make this depend on the length of the split array*****
        //to place the correct amount of spots for each letter in each word
        if (currentWord === "COW") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[0]);
        }
        if (currentWord === "HORSE") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[2]);
        }
        if (currentWord === "PIG") {
           document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[0]);
        }
        if (currentWord === "GOAT") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[1]);
        }
        if (currentWord === "LLAMA") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[2]);
        }
        if (currentWord === "CHICKEN") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[3]);
        }
        if (currentWord === "DUCK") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[1]);
        }
        if (currentWord === "SHEEP") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[2]);
        }
        if (currentWord === "GOOSE") {
            document.getElementById("currentWord").innerHTML = ("Current Word: " + blanks[2]);
        }
    }
}

//Function to update score for each win.
function updateScore() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

//number of guesses left, needs to go down each onkeyup event (letter input)
function guessesLeft() {
    var guesses = 10;
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + guesses);
    //need to figure out how to loop down to 0?????
    var left = (guesses -1);
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + left);
}


//Calling Functions=======================================

renderWord();

//allows the user to start to guess the words, by inputting letters and converts them to display in uppercase.
document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();
        console.log(letter);
        document.getElementById("lettersUsed").innerHTML = "Letters Used: " + letter;
        
    updateScore();
    guessesLeft();
    
}



    
    



//("Current Word: " + currentWord.split('').join(' '));



//Object for the word cow to get the letters
//var cow = {
    //firstLetter: "c",
    //firstLetter: "o",
    //firstLetter:"w",

    /*isCurrentWord: function() {
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
    },*/
//};

//call CurrentWordCow
//if (currentWord === "cow") {
    //cow.isCurrentWord();
    //document.getElementById("currentWord").innerHTML = "Current Word: _ _ _";
//}

//if (cow.firstLetter === "c") {
   // document.getElementById("currentWord").innerHTML = (firstLetter + " _ _");
//}
    // Or with a variable that matches the name of the property
    //var ageProperty = "age (est)";
    //var years = gandalf[ageProperty];
   // alert("My 401k has been gathering interest for " + years + " years!");
  //}



//select random word from array and display the blanks

//in one div/element start with empty blanks and fill in as user guesses...start with "_ _ _ _ _ _" and change inner html as it adds letters

//update another element/div of letters guessed

//when complete, display picture of animal on screen (and maybe play sound)

//for loop for word length to fill in blank?

//letter array for all alphabet letters?

//function consoleInside(arr) {}

//countdown for guess left
// var guessesLeft = (userInput -1)