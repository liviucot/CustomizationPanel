//SPONSOR LOGO UPLOAD - myCanvas2 - pathN2

var canvasN2 = document.getElementById('myCanvas2');
var ctxN2 = canvasN2.getContext('2d');

var fileInput2 = document.getElementById('imageLoader2');
fileInput2.addEventListener('change', imageLoader2, false);

function imageLoader2() {
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
    ctxN2.clearRect(0, 0, canvasN2.width, canvasN2.height);
    ctxN2.drawImage(img, x, y, width, height);
  }
  img.src = URL.createObjectURL(fileInput2.files[0]);
}

function delete1ColourSponsorLogo(){
    ctxN2.clearRect(0, 0, 115, 100);
}

var cN2 = document.getElementById("myCanvas2");
var ctxN2 = cN2.getContext("2d");

function pathN2(v) {
  switch (v) {
    // top: 103px; left: 210px
    case "right":
        cN2.style.width = "50px";
        cN2.style.height = "50px";
        cN2.style.top = "87px";
        cN2.style.left = "120px";
        cN2.style.position = "absolute";
        break;

    case "left":
        cN2.style.width = "50px";
        cN2.style.height = "50px";
        cN2.style.top = "100px";
        cN2.style.left = "200px";
        cN2.style.position = "absolute";
        break;

    case "center":
        cN2.style.width = "115px";
        cN2.style.height = "100px";
        cN2.style.top = "140px";
        cN2.style.left = "133px";
        cN2.style.position = "absolute";
        break;

    case "toprear":
        cN2.style.width = "115px";
        cN2.style.height = "100px";
        cN2.style.top = "43px";
        cN2.style.left = "515px";
        cN2.style.position = "absolute";
        break;

    case "bottomrear":
        cN2.style.width = "115px";
        cN2.style.height = "100px";
        cN2.style.top = "210px";
        cN2.style.left = "517px";
        cN2.style.position = "absolute";
        break;
        }
      }
