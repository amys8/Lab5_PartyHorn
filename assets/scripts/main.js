// main.js

// horn selection
document.getElementById("radio-air-horn-container").addEventListener("click", airHornPic);
function airHornPic() {
  document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}
document.getElementById("radio-car-horn-container").addEventListener("click", carHornPic);
function carHornPic() {
  document.getElementById("sound-image").src = "./assets/media/images/car.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}
document.getElementById("radio-party-horn-container").addEventListener("click", partyHornPic);
function partyHornPic() {
  document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
  document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}
