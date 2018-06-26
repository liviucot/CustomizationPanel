//WRITE TEXT AND CHANGE COLOR OF SMALL NUMBERS SECTION 3 INCH

var canvas9 = document.getElementById("canvas9");
var ctx9 = canvas9.getContext("2d");

ctx9.font = "bold 16px MyFont";
ctx9.fillStyle = "white";
ctx9.textAlign = "center";

var $text9 = document.getElementById("sourceText9");

$text9.onkeyup = function(e) {
redrawTextsCan9();
}

function redrawTextsCan9() {
ctx9.clearRect(0, 0, canvas9.width, canvas9.height);
wrapText(ctx9, $text9.value, 13, 18, "MyFont");
}

function wrapText(context, text, x, y, maxWidth, fontSize, fontFace) {
var words = text.split(' ');
var line = '';
var lineHeight = fontSize;

context.font = fontSize + " " + fontFace;

for (var n = 0; n < words.length; n++) {
  var testLine = line + words[n] + ' ';
  var metrics = context.measureText(testLine);
  var testWidth = metrics.width;
  if (testWidth > maxWidth) {
    context.fillText(line, x, y);
    line = words[n] + ' ';
    y += lineHeight;
  } else {
    line = testLine;
  }
}
context.fillText(line, x, y);
return (y);
}


var location9 = document.getElementById("canvas9");
var ctxLoc9 = location9.getContext("2d");

function path9(v9) {
  switch(v9) {
   // top: 103px; left: 210px
      case "rightabove":
          location9.style.top = "90px";
          location9.style.left = "131px";
          location9.style.position = "absolute";
          break;

      case "rightbelow":
          location9.style.top = "136px";
          location9.style.left = "132px";
          location9.style.position = "absolute";
          break;

      case "left":
          location9.style.top = "111px";
          location9.style.left = "220px";
          location9.style.position = "absolute";
          break;

      case "center":
          location9.style.top = "111px";
          location9.style.left = "175px";
          location9.style.position = "absolute";
          break;
          }
}

function color9(v9) {
v9 = v9.dataset.id;
switch (v9) {
  // top: 103px; left: 210px

  case "white":
    ctx9.fillStyle = '#ffffff';
    break;

   case "black":
    ctx9.fillStyle = '#000000';
    break;

   case "blue":
    ctx9.fillStyle = '#0033ff';
    break;

   case "red":
    ctx9.fillStyle = '#ff0000';
    break;

   case "navyblue":
    ctx9.fillStyle = '#000066';
    break;

  case "yellow":
    ctx9.fillStyle = "#ffff00";
    break;

  case "green":
    ctx9.fillStyle = "#009933";
    break;

  case "littleblue":
    ctx9.fillStyle = "#33ccff";
    break;

  case "orange":
    ctx9.fillStyle = "#ff9900";
    break;
}
redrawTextsCan9();
}


//WRITE TEXT AND CHANGE COLOR OF SMALL NIKE NUMBERS SECTION 3 INCH

var canvas13 = document.getElementById("canvas13");
var ctx13 = canvas13.getContext("2d");

ctx13.font = "bold 16px NikeFont";
ctx13.fillStyle = "white";
ctx13.textAlign = "center";

var $text13 = document.getElementById("sourceText13");

$text13.onkeyup = function(e) {
redrawTextsCan13();
}

function redrawTextsCan13() {
ctx13.clearRect(0, 0, canvas13.width, canvas13.height);
wrapText(ctx13, $text13.value, 13, 18, "NikeFont");
}

function wrapText(context, text, x, y, maxWidth, fontSize, fontFace) {
var words = text.split(' ');
var line = '';
var lineHeight = fontSize;

context.font = fontSize + " " + fontFace;

for (var n = 0; n < words.length; n++) {
  var testLine = line + words[n] + ' ';
  var metrics = context.measureText(testLine);
  var testWidth = metrics.width;
  if (testWidth > maxWidth) {
    context.fillText(line, x, y);
    line = words[n] + ' ';
    y += lineHeight;
  } else {
    line = testLine;
  }
}
context.fillText(line, x, y);
return (y);
}

function color13(v9) {
v9 = v9.dataset.id;
switch (v9) {
  // top: 103px; left: 210px

  case "white":
    ctx13.fillStyle = '#ffffff';
    break;

   case "black":
    ctx13.fillStyle = '#000000';
    break;

}
redrawTextsCan13();
}

var location14 = document.getElementById("canvas13");
var ctxLoc14 = location14.getContext("2d");

function path13(v9) {
  switch(v9) {
   // top: 103px; left: 210px
      case "rightabove":
          location14.style.top = "90px";
          location14.style.left = "131px";
          location14.style.position = "absolute";
          break;

      case "rightbelow":
          location14.style.top = "136px";
          location14.style.left = "132px";
          location14.style.position = "absolute";
          break;

      case "left":
          location14.style.top = "111px";
          location14.style.left = "220px";
          location14.style.position = "absolute";
          break;

      case "center":
          location14.style.top = "111px";
          location14.style.left = "175px";
          location14.style.position = "absolute";
          break;
          }
}
