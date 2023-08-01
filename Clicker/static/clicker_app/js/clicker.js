const ContainerContent = document.querySelector(".container");
const DisplayNumber = document.querySelector(".display");
let count = 0;

function PlayAudiofile() {
  var audio = new Audio("../audio/audio_coins.wav");
  audio.play();
}

ContainerContent.addEventListener("click", function (event) {
  if (!event.target.classList.contains("btn")) return;

  count += 1;
  var value = (DisplayNumber.innerText = count.toString());
  DisplayNumber.innerText = value;
});
