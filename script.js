var naam = prompt("What's Your Good Name Dear :");
if (5 < naam.length) {
  document.querySelector("#name h1").textContent = `Hello, ${naam}`;
} else {
  document.querySelector("#name h1").textContent = `Hello, ${naam}`;
}
var toggle = false;
var songs = [
  "love.mp3",
  "love1.mp3",
  "love2.mp3",
  "love3.mp3",
  "love4.mp3",
  "love5.mp3",
];
var counter = 2;
var audio = new Audio(songs[counter]);

document.querySelector("#mid").addEventListener("click", function () {
  if (!toggle) {
    document.querySelector("#mid").innerHTML = `<i class="ri-pause-line"></i>`;
    audio.play();
    toggle = true;
  } else {
    document.querySelector(
      "#mid"
    ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
    toggle = false;
    audio.pause();
  }
});

document.querySelector("#left").addEventListener("click", function () {
  if (counter === 0) {
    counter = 6;
  } else {
    counter--;
    audio.src = songs[counter];
    audio.play();
  }
});

document.querySelector("#right").addEventListener("click", function () {
  if (counter === 6) {
    counter = 0;
  } else {
    counter++;
    audio.src = songs[counter];
    audio.play();
  }
});
