// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const uiGame = document.querySelector("#game"),
      uiMinNum = document.querySelector("span.min-num"),
      uiMaxNum = document.querySelector("span.max-num"),
      uiGuessBtn = document.querySelector("#guess-btn")
      uiGuessInput = document.querySelector("#guess-input"),
      uiMessage = document.querySelector(".message");

// Assign UI min and max
uiMinNum.textContent = min;
uiMaxNum.textContent = max;

// Listener for guess btn
uiGuessBtn.addEventListener("click", function (e){
  setMessage("", "");
  
  let guess = parseInt(uiGuessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    // check if game won
    if (guess === winningNum) {
      // Game over - won
      gameOver(true, `Please enter a number between ${min} and ${max}`);
    } else {
      // Wrong number
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        // Game over - lost
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
      } else {
        // Game continue - answer wrong
        // change border color
        uiGuessInput.style.borderColor = "red";
        
        uiGuessInput.value = "";

        // tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
      }
    }
  }
});

// Game over
function gameOver(isWon, msg) {
  const color = isWon ? "green" : "red";
  
  // disable input
  uiGuessInput.disabled = true;

  // change border color
  uiGuessInput.style.borderColor = color;

  // set msg
  setMessage(msg, color);
}

// Set Message
function setMessage(msg, color) {
  uiMessage.style.color = color;
  uiMessage.textContent = msg;
};