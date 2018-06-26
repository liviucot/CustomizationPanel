// WRITE TEXT AND CHANGE COLOR OF BIG NUMBERS

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "100px MyFont";
ctx.fillStyle = "white";
ctx.textAlign = "center";

var $text = document.getElementById("sourceText1");

$text.onkeyup = function(e) {
redrawTextsCan();
}

function redrawTextsCan() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
wrapText(ctx, $text.value, 74.5, 102, "MyFont");
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


function color(v4) {
v4 = v4.dataset.id;
switch (v4) {
  // top: 103px; left: 210px

  case "white":
    ctx.fillStyle = '#ffffff';
    break;

   case "black":
    ctx.fillStyle = '#000000';
    break;

   case "blue":
    ctx.fillStyle = '#0033ff';
    break;

   case "red":
    ctx.fillStyle = '#ff0000';
    break;

   case "navyblue":
    ctx.fillStyle = '#000066';
    break;

  case "yellow":
    ctx.fillStyle = "#ffff00";
    break;

  case "green":
    ctx.fillStyle = "#009933";
    break;

  case "littleblue":
    ctx.fillStyle = "#33ccff";
    break;

  case "orange":
    ctx.fillStyle = "#ff9900";
    break;
}
redrawTextsCan();
}

//WRITE TEXT AND CHANGE COLOR OF BIG NIKE NUMBERS

var canvas8 = document.getElementById("canvas8");
var ctx8 = canvas8.getContext("2d");

ctx8.font = "105px NikeFont";
ctx8.fillStyle = "white";
ctx8.textAlign = "center";

var $text8 = document.getElementById("sourceText8");

$text8.onkeyup = function(e) {
  redrawTextsCan8();
}

function redrawTextsCan8() {
  ctx8.clearRect(0, 0, canvas8.width, canvas8.height);
  wrapText(ctx8, $text8.value, 74.5, 102, "NikeFont");
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


function color8(v8) {
  v8 = v8.dataset.id;
  switch (v8) {
    // top: 103px; left: 210px

    case "white":
      ctx8.fillStyle = '#ffffff';
      break;

     case "black":
      ctx8.fillStyle = '#000000';
      break;
  }
  redrawTextsCan8();
}