// main.js

// var hornsound = document.getElementbyId("horn-sound").addEventListener

document.getElementbyId("radio-air-horn").addEventListener("click", airHornPic);
function airHornPic() {
  document.getElementbyId("sound-image").src = "./assets/media/images/air-horn.svg";
  document.getElementbyId("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}
document.getElementbyId("radio-car-horn").addEventListener("click", carHornPic);
function carHornPic() {
  document.getElementbyId("sound-image").src = "./assets/media/images/car.svg";
  document.getElementbyId("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}
document.getElementbyId("radio-party-horn").addEventListener("click", partyHornPic);
function partyHornPic() {
  document.getElementbyId("sound-image").src = "./assets/media/images/party-horn.svg";
  document.getElementbyId("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}
