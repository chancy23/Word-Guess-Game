var farmAnimals = ["cow", "horse", "pig", "goat", "llama", "chicken", "duck", "sheep", "goose"];
console.log(farmAnimals);

document.onkeyup = function(event) {
    var userInput = event.key;
    console.log(userInput);
    document.getElementById("lettersUsed").innerHTML = "Letters Used: " + userInput;
}

//in one div/element start with empty blanks and fill in as user guesses...start with "_ _ _ _ _ _" and change inner html as it adds letters

//update another element/div of letters guessed

//when complete, display picture of animal on screen (and maybe play sound)

//