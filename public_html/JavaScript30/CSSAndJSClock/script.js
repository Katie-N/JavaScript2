// Katie Nordberg 9/6/2021

const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");
// Added a ticking sound.
/* I have never used audio in JavaScript/HTML before so this was very fun to work
with. I had a bit of trouble trimming the two audio files to start at the same
time. But once I got them evenly paced it all came together. */
const highTick = new Audio('highTick.mp3');
const lowTick = new Audio('lowTick.mp3');
let unmuted = false;
let muteButton = document.getElementById("muteButton");

/* Added mute button to avoid error when the sound tried to play before the user
intercts with the page. It also got pretty annoying to hear the clicking constantly. */
muteButton.addEventListener("click", () => {
  unmuted = !unmuted;
  muteButton.classList.toggle("muted");
});

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  /* Added ticking noise to give that classic "tick tock" clock sound */
  if (seconds % 2 == 0 && unmuted) {
    highTick.play();
  } else if (seconds % 2 == 1 && unmuted){
    lowTick.play();
  }

  /* Added test to remove transition effect when the hands reach the starting
  position. This way the hands won't rotate backwards when the count restarts. */
  if (secondsDegrees == 90) {
    secondHand.classList.add("no-transition");
  } else {
    secondHand.classList.remove("no-transition");
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  if (minutesDegrees == 90) {
    minuteHand.classList.add("no-transition");
  } else {
    minuteHand.classList.remove("no-transition");
  }
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  if (hoursDegrees == 90) {
    hourHand.classList.add("no-transition");
  } else {
    hourHand.classList.remove("no-transition");
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
