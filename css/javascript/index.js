
document.addEventListener("DOMContentLoaded", function () {
    // Get your guess number from the input value


    const inputVal = document.getElementById("input");

    // Get your button element
    const inputButton = document.querySelector(".btn");

    // actual guess


    const actualGuess = 10;

    // Track the number of guesses

    let remainingChances = 5;

    // Check if guess is the same as the user's guess
    function checkGuess(userGuess, actual) {
        if (userGuess !== "" && !isNaN(userGuess) ) {
            remainingChances--;

            if (Number(userGuess) === actual) {
                alert("Correct guess! Your head dey there");
            } else {
                alert(`Wrong guess! You have ${remainingChances} chances left`);
            }

            if (remainingChances === 0) {
                alert(`Game over! The correct number was ${actual}`);
                // You might want to reset the game here.
                inputButton.disabled = true; // Disable the button after 5 attempts
            }
        } 
        
     
    }

    inputButton.addEventListener("click", function () {
        checkGuess(inputVal.value, actualGuess);
    });
});

