const nextClueWaitTime = 1000; 
const cluePauseTime = 333; 
const len = 6;

//Global Variables
var pattern = [1, 1, 5, 5, 6, 6];

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;
var clueHoldTime = 1000; 
var mistakes = 0;
let timer = null;
var count = 20;
var reset = false;

function generatePattern() {
  for (let j = 0; j < len; j++) {
    pattern[j] = Math.ceil(Math.random() * 6);
  }
}

function startGame() {
  console.log(pattern);
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generatePattern();
  playClueSequence();
} 

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  reset=true;
}

// Sound Synthesis Functions
const freqMap = {
  1: 277.18,
  2: 349.23,
  3: 415.30,
  4: 493.88,
  5: 659.26, //G
  6: 830.61 //A
};
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
} 

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  mistakes = 0;
  let delay = nextClueWaitTime; 
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
  count = 20;
  reset = false;

  clearInterval(timer);
  timer = setInterval(countDown, 1000);
}

function countDown() {
    // Update the count down every 1 second
    document.getElementById("clock").innerHTML =
      "Countdown: " + count + " s";
    count -= 1; 
    if (count < 0 || reset) {
      if(!reset) {
        stopGame(); 
        alert("Time is up. You lost.");
      }
      resetTimer();
      clearInterval(timer);
    }
}
function resetTimer(){
  count = 20;
  document.getElementById("clock").innerHTML = "Countdown: 0 s";
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn === pattern[guessCounter]) {
    if (guessCounter === progress) {
      if (progress === pattern.length - 1) {
        winGame(); 
        reset = true;
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    mistakes++;
    if (mistakes === 3) {
      loseGame();
      reset = true;
    } else {
      alert("Wrong! Attempts left:" + (3 - mistakes));
    }
  }
}
