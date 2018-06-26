//WRITE TEXT AND CHANGE COLOR OF SMALL NUMBERS SECTION 1 INCH

var canvas5 = document.getElementById("canvas5");
var ctx5 = canvas5.getContext("2d");

ctx5.font = "bold 12px MyFont";
ctx5.fillStyle = "white";
ctx5.textAlign = "center";

//This is the var for the text input 'sourcetext5'
var $text5 = document.getElementById("sourceText5");

$text5.onkeyup = function(e) {
redrawTextsCan5();
}

//Clear context, wrap it and set font 'MyFont'
function redrawTextsCan5() {
ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
wrapText(ctx5, $text5.value, 13, 18, "MyFont");
}

//This is for text wrap
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

//This is for changing location of the initials 
var location5 = document.getElementById("canvas5");
var ctxLoc5 = location5.getContext("2d");

function path5(v5) {
  switch(v5) {
   // top: 103px; left: 210px
      case "rightabove":
          location5.style.top = "90px";
          location5.style.left = "131px";
          location5.style.position = "absolute";
          break;

      case "rightbelow":
          location5.style.top = "132px";
          location5.style.left = "131px";
          location5.style.position = "absolute";
          break;

      case "left":
          location5.style.top = "110px";
          location5.style.left = "220px";
          location5.style.position = "absolute";
          break;

      case "center":
          location5.style.top = "110px";
          location5.style.left = "174px";
          location5.style.position = "absolute";
          break;
          }
}
//This is for changing colour of the initials 
function color5(v4) {
v4 = v4.dataset.id;
switch (v4) {
  // top: 103px; left: 210px

  case "white":
    ctx5.fillStyle = '#ffffff';
    break;

   case "black":
    ctx5.fillStyle = '#000000';
    break;

   case "blue":
    ctx5.fillStyle = '#0033ff';
    break;

   case "red":
    ctx5.fillStyle = '#ff0000';
    break;

   case "navyblue":
    ctx5.fillStyle = '#000066';
    break;

  case "yellow":
    ctx5.fillStyle = "#ffff00";
    break;

  case "green":
    ctx5.fillStyle = "#009933";
    break;

  case "littleblue":
    ctx5.fillStyle = "#33ccff";
    break;

  case "orange":
    ctx5.fillStyle = "#ff9900";
    break;
}
redrawTextsCan5();
}


//WRITE TEXT AND CHANGE COLOR OF SMALL NIKE NUMBERS SECTION 1 INCH

var canvas12 = document.getElementById("canvas12");
var ctx12 = canvas12.getContext("2d");

ctx12.font = "bold 12px NikeFont";
ctx12.fillStyle = "white";
ctx12.textAlign = "center";

//This is the var for the text input 'sourcetext12'
var $text12 = document.getElementById("sourceText12");

$text12.onkeyup = function(e) {
redrawTextsCan12();
}

//Clear context, wrap it and set font 'MyFont'
function redrawTextsCan12() {
ctx12.clearRect(0, 0, canvas12.width, canvas12.height);
wrapText(ctx12, $text12.value, 13, 18, "NikeFont");
}

//This is for text wrap
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

//This is for changing location of the initials 
var location12 = document.getElementById("canvas12");
var ctxLoc12 = location12.getContext("2d");

function path12(v5) {
  switch(v5) {
   // top: 103px; left: 210px
      case "rightabove":
          location12.style.top = "90px";
          location12.style.left = "131px";
          location12.style.position = "absolute";
          break;

      case "rightbelow":
          location12.style.top = "132px";
          location12.style.left = "131px";
          location12.style.position = "absolute";
          break;

      case "left":
          location12.style.top = "110px";
          location12.style.left = "220px";
          location12.style.position = "absolute";
          break;

      case "center":
          location12.style.top = "110px";
          location12.style.left = "174px";
          location12.style.position = "absolute";
          break;
          }
}

//This is for changing colour of the initials 
function color12(v4) {
v4 = v4.dataset.id;
switch (v4) {
  // top: 103px; left: 210px

  case "white":
    ctx12.fillStyle = '#ffffff';
    break;

   case "black":
    ctx12.fillStyle = '#000000';
    break;
}
redrawTextsCan12();
}


