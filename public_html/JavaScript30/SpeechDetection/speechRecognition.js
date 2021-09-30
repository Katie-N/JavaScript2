// Katie Nordberg
// 9/29/2021

// Improved by separating script from HTML
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let currentlyRecognizing = false;
recognition.interimResults = true;

let continueRecognition = true;

// Changed from p to wordsOnScreen to be more descriptive.
let wordsOnScreen = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(wordsOnScreen);

// Switched from arrow functions to regular anonymous function
recognition.addEventListener('result', function (e) {
  console.log(e);
  if (continueRecognition) {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    wordsOnScreen.textContent = transcript;
    if (e.results[0].isFinal) {
      wordsOnScreen = document.createElement("p");
      words.appendChild(wordsOnScreen);
    }
    // Added check to stop the voice recording. But uses the listener word command in order to not stop whenever someone means to say one of these words.
    let endWordCombos = ["command goodbye", "commands goodbye", "command end", "commands end", "command stop", "commands stop"]
    endWordCombos.forEach((command, i) => {
      if (transcript.includes(command)) {
        stopRecognition();
      }
    });
  }
});

recognition.addEventListener('end', () => {
  // Added check to not keep listenting after a pause if the continueRecognition variable is false. It becomes false when the stop button is pushed.
  if (continueRecognition) {
    startRecognition();
  }
});

// Added buttons to control when the microphone is being used
document.getElementById("stopRecognition").addEventListener("click", stopRecognition);

document.getElementById("startRecognition").addEventListener("click", () => {
  // Avoid "Failed to execute 'start' on 'SpeechRecognition': recognition has already started." error
  if (!currentlyRecognizing) {
    startRecognition();
  }
});

function startRecognition() {
  continueRecognition = true;
  recognition.start();
  currentlyRecognizing = true;

  document.getElementById("front").classList.add("open");
}

function stopRecognition() {
  continueRecognition = false;
  recognition.stop();
  currentlyRecognizing = false;

  document.getElementById("front").classList.remove("open");

  console.log("Stop recognition");
}

startRecognition();

// This functionality is only available in Chrome and Firefox right now. Tell users that.
alert("Please use Chrome or Firefox to enjoy this page. And keep your microphone access on.");
