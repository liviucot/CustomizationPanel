//ADDITIONAL CLUB BADGE UPLOAD - myCanvas3 - pathN3

var canvasN3 = document.getElementById('myCanvas3');
var ctxN3 = canvasN3.getContext('2d');

var fileInput3 = document.getElementById('imageLoader3');
fileInput3.addEventListener('change', imageLoader3, false);

function imageLoader3() {
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
    ctxN3.clearRect(0, 0, canvasN3.width, canvasN3.height);
    ctxN3.drawImage(img, x, y, width, height);
  }
  img.src = URL.createObjectURL(fileInput3.files[0]);
}

function deleteAdditionalClubBadge(){
    ctxN3.clearRect(0, 0, 115, 100);
}

var cN3 = document.getElementById("myCanvas3");
var ctxN3 = cN3.getContext("2d");

function pathN3(v) {
  switch (v) {
    // top: 103px; left: 210px
    case "right":
      cN3.style.left = "120px";
      cN3.style.top = "103px";
      cN3.style.position = "absolute";
      break;
    case "left":
      cN3.style.top = "103px";
      cN3.style.left = "210px";
      cN3.style.position = "absolute";
      break;
    case "center":
      cN3.style.top = "103px";
      cN3.style.left = "167px";
      cN3.style.position = "absolute";
      break;
  }
}