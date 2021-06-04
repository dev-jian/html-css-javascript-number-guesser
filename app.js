// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

// guess btn event listener
uiGuessBtn.addEventListener("click", function (e) {
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  } else if (e.target.className === "") {
    setMessage("", "");
  
    let guess = parseInt(uiGuessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}.`, "red");
    } else {
      // check if game won
      if (guess === winningNum) {
        // Game over - won
        gameOver(true, `${winningNum} is correct!, YOU WIN!`);
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
  }
});

// Get Winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Game over function
function gameOver(isWon, msg) {
  const color = isWon ? "green" : "red";
  
  // disable input
  uiGuessInput.disabled = true;

  // change border color
  uiGuessInput.style.borderColor = color;

  // set msg
  setMessage(msg, color);

  uiGuessBtn.value = "Play Again";
  uiGuessBtn.classList += "play-again";
}

// Set Message function
function setMessage(msg, color) {
  uiMessage.style.color = color;
  uiMessage.textContent = msg;
};