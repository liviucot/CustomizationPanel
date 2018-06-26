//WRITE TEXT AND CHANGE COLOR OF 3" INITIALS

var canvas10 = document.getElementById("canvas10");
var ctx10 = canvas10.getContext("2d");

ctx10.font = "bold 16px Arial";
ctx10.fillStyle = "black";
ctx10.textAlign = "center";

var $text10 = document.getElementById("sourceText10");

$text10.onkeyup = function(e) {
redrawTextsCan10();
}

function redrawTextsCan10() {
ctx10.clearRect(0, 0, canvas10.width, canvas10.height);
wrapText(ctx10, $text10.value.toUpperCase(), 22, 18, "Arial");
}

function deleteInitials3Inch(){
    ctx10.clearRect(0, 0, 115, 100);
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


var location10 = document.getElementById("canvas10");
var ctxLoc10 = location10.getContext("2d");

function path10(v10) {
  switch(v10) {
   // top: 103px; left: 210px
      case "rightabove":
          location10.style.top = "92px";
          location10.style.left = "125px";
          location10.style.position = "absolute";
          break;

      case "rightbelow":
          location10.style.top = "138px";
          location10.style.left = "126px";
          location10.style.position = "absolute";
          break;

      case "left":
          location10.style.top = "113px";
          location10.style.left = "210px";
          location10.style.position = "absolute";
          break;

      case "center":
          location10.style.top = "113px";
          location10.style.left = "172px";
          location10.style.position = "absolute";
          break;
          }
}

function color10(v10) {
v10 = v10.dataset.id;
switch (v10) {
  // top: 103px; left: 210px

  case "white":
    ctx10.fillStyle = '#ffffff';
    break;

   case "black":
    ctx10.fillStyle = '#000000';
    break;

   case "blue":
    ctx10.fillStyle = '#0033ff';
    break;

   case "red":
    ctx10.fillStyle = '#ff0000';
    break;

   case "navyblue":
    ctx10.fillStyle = '#000066';
    break;

  case "yellow":
    ctx10.fillStyle = "#ffff00";
    break;

  case "green":
    ctx10.fillStyle = "#009933";
    break;

  case "littleblue":
    ctx10.fillStyle = "#33ccff";
    break;

  case "orange":
    ctx10.fillStyle = "#ff9900";
    break;
}
redrawTextsCan10();
}