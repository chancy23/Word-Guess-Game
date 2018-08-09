//Global variables and arrays===================================================================

//array of words to choose from
var words = ["cow", "horse", "pig", "goat", "llama", "chicken", "duck", "sheep", "goose"];
    console.log(words);

var wordsIndex = 0;

//Empty array of "blanks spaces" to start game:
var blanks = [];

//Empty array to push letters guessed to:
var guessed = [];



//tracks number of wins, needs to go up by one upon completion of word
var wins = 0;



//Functions====================================================================================

// Function to display word blanks 
function displayWordStart() {
    var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
        console.log("current word is " + currentWord);
        for (i = 0; i < currentWord.length; i++) {
            blanks.push("_");
            document.getElementById("currentWord").innerHTML = blanks.join(" ");
        }
    //splits each word into letters
    var split = currentWord.split('');
    console.log("word split: " + split);
    console.log("split length: " + split.length);
};

function letterInWord(letter) {
    // the array that will contain the char positions in the currentWord that has the 
    var positions = new Array();
    //console.log(Array);
    for (i = 0 ; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
            positions.push(i);
    }
    return positions;
}

function lettersToGuess() {
    var i ;
    var toGess = 0 ;
    for (i in blanks) {
        if (blanks[i] === "__")
            toGess++;
    }
    return toGess;
}

//function for displaying letters guessed and starts the input from user
function lettersGuessed() {
    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        console.log(letter);
        guessed.push(letter);
        document.getElementById("lettersGuessed").innerHTML = guessed.join("  ");
    }
};

//number of guesses left, needs to go down each onkeyup event (letter input)
function guessesLeft() {
    var guessesLeft = [];
        for (var g = 10; g > -1; g--) {
            guessesLeft.push(g);
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
        }
};
 //need to figure out how to loop down to 0?????   

  

//Function to update score for each win.
function updateScore() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

function resetGame() {
    //use this to reset game after win or loss (11 or more letters guessed)
}


//Calling Functions=======================================
displayWordStart();
lettersGuessed();
guessesLeft();
letterInWord();
lettersToGuess();
//updateScore();
//resetGame();

    



    
    



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