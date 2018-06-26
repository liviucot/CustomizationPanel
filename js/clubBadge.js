//CLUB BADGE UPLOAD - myCanvas - path

var canvasN = document.getElementById('myCanvas');
var ctxN = canvasN.getContext('2d');

var fileInput = document.getElementById('imageLoader');
fileInput.addEventListener('change', imageLoader, false);

function imageLoader() {
  img = new Image();
  img.onload = function() {

    var MAX_WIDTH = 40;
    var MAX_HEIGHT = 40;
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
    ctxN.clearRect(0, 0, canvasN.width, canvasN.height);
    ctxN.drawImage(img, x, y, width, height);
  }
  img.src = URL.createObjectURL(fileInput.files[0]);
}

function deleteClubBadge(){
    ctxN.clearRect(0, 0, 115, 100);
}

var cN = document.getElementById("myCanvas");
var ctxN = cN.getContext("2d");

function pathN(v) {
  switch (v) {
    // top: 103px; left: 210px
    case "right":
      cN.style.left = "120px";
      cN.style.top = "103px";
      cN.style.position = "absolute";
      break;
    case "left":
      cN.style.top = "103px";
      cN.style.left = "210px";
      cN.style.position = "absolute";
      break;
    case "center":
      cN.style.top = "103px";
      cN.style.left = "167px";
      cN.style.position = "absolute";
      break;
  }
}