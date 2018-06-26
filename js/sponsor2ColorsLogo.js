//SPONSOR LOGO 2+ COLORS UPLOAD - spon2ColorCanvas - sponColorsLocation

var spon2ColorCanvas = document.getElementById('spon2ColorCanvas');
var spon2ColorCtxLocation = spon2ColorCanvas.getContext('2d');

var spon2ColorInput = document.getElementById('spon2ColorImgLoader');
spon2ColorInput.addEventListener('change', spon2ColorImgLoader, false);

function spon2ColorImgLoader() {
  img = new Image();
  img.onload = function() {

    var MAX_WIDTH = 115;
    var MAX_HEIGHT = 100;
    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    var x = (MAX_WIDTH - width) / 2;
    var y = (MAX_HEIGHT - height) / 2;
    spon2ColorCtxLocation.clearRect(0, 0, spon2ColorCanvas.width, spon2ColorCanvas.height);
    spon2ColorCtxLocation.drawImage(img, x, y, width, height);
  }
  img.src = URL.createObjectURL(spon2ColorInput.files[0]);
}

function delete2ColoursSponsorLogo(){
    spon2ColorCtxLocation.clearRect(0, 0, 115, 100);
}

var spon2ColorCanLocation = document.getElementById("spon2ColorCanvas");
var spon2ColorCtxLocation = spon2ColorCanLocation.getContext("2d");

function sponColorsLocation(v) {
  switch (v) {
    // top: 103px; left: 210px
    case "right":
        spon2ColorCanLocation.style.width = "50px";
        spon2ColorCanLocation.style.height = "50px";
        spon2ColorCanLocation.style.top = "87px";
        spon2ColorCanLocation.style.left = "120px";
        spon2ColorCanLocation.style.position = "absolute";
        break;

    case "left":
        spon2ColorCanLocation.style.width = "50px";
        spon2ColorCanLocation.style.height = "50px";
        spon2ColorCanLocation.style.top = "100px";
        spon2ColorCanLocation.style.left = "200px";
        spon2ColorCanLocation.style.position = "absolute";
        break;

    case "center":
        spon2ColorCanLocation.style.width = "115px";
        spon2ColorCanLocation.style.height = "100px";
        spon2ColorCanLocation.style.top = "140px";
        spon2ColorCanLocation.style.left = "133px";
        spon2ColorCanLocation.style.position = "absolute";
        break;

    case "toprear":
        spon2ColorCanLocation.style.width = "115px";
        spon2ColorCanLocation.style.height = "100px";
        spon2ColorCanLocation.style.top = "43px";
        spon2ColorCanLocation.style.left = "515px";
        spon2ColorCanLocation.style.position = "absolute";
        break;

    case "bottomrear":
        spon2ColorCanLocation.style.width = "115px";
        spon2ColorCanLocation.style.height = "100px";
        spon2ColorCanLocation.style.top = "210px";
        spon2ColorCanLocation.style.left = "517px";
        spon2ColorCanLocation.style.position = "absolute";
        break;
        }
      }