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

// volume control
var volnum = document.getElementById("volume-number");
var volslid = document.getElementById("volume-slider");
volnum.addEventListener("input", updateSlider);
function updateSlider() {
  volslid.value = volnum.value;
  document.getElementById("horn-sound").volume = volnum.value/100;
  if (volnum.value >= 67) {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
  }
  else if (volnum.value >= 33) {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
  }
  else if (volnum.value >= 1) {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
  }
  else {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
  }
}
volslid.addEventListener("change", updateNumber);
function updateNumber() {
  volnum.value = volslid.value;
  document.getElementById("horn-sound").volume = volslid.value/100;
  if (volnum.value >= 67) {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
  }
  else if (volnum.value >= 33) {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
  }
  else if (volnum.value >= 1) {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
  }
  else {
    document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
  }
}


// honk button
/*var honk = document.getElementById("honk-btn");
if (document.getElementById("volume-number").value == 0) {
  honk.disabled = true;
}
else {
  honk.disabled = false;
}
honk.addEventListener("click", playHonk);
function playHonk(e) {
  e.preventDefault();
  honk.play();
}*/
  
