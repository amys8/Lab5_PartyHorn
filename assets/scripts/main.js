// main.js

// horn selection
document.getElementById("radio-air-horn").addEventListener("click", airHornPic);
function airHornPic() {
  document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}
document.getElementById("radio-car-horn").addEventListener("click", carHornPic);
function carHornPic() {
  document.getElementById("sound-image").src = "./assets/media/images/car.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}
document.getElementById("radio-party-horn").addEventListener("click", partyHornPic);
function partyHornPic() {
  document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}

var volnum = document.getElementById("volume-number");
var volslid = document.getElementById("volume-slider");
volnum.addEventListener("input", updateSlider);
function updateSlider() {
  volslid.value = volnum.value;
}
volslid.addEventListener("change", updateNumber);
function updateNumber() {
  volnum.value = volslid.value;
}
