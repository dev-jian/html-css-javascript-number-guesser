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
  let guess = parseInt(uiGuessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    // check if won
    if (guess === winningNum) {
      // disable input
      uiGuessInput.disabled = true;

      // change border color
      uiGuessInput.style.borderColor = "green";

      // set msg
      setMessage(`${winningNum} is correct!, YOU WIN!`, "green");
    } else {
  
    }
  }
});

// Set Message
function setMessage(msg, color) {
  uiMessage.style.color = color;
  uiMessage.textContent = msg;
};