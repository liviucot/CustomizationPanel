//WRITE TEXT AND CHANGE COLOR OF 1" INITIALS

var canvas7 = document.getElementById("canvas7");
var ctx7 = canvas7.getContext("2d");

ctx7.font = "bold 12px Arial";
ctx7.fillStyle = "black";
ctx7.textAlign = "center";

//This is the var for the text input 'sourcetext7'
var $text7 = document.getElementById("sourceText7");

$text7.onkeyup = function(e) {
  redrawTextsCan7();
}

//Clear context, wrap it and set font 'MyFont'
function redrawTextsCan7() {
  ctx7.clearRect(0, 0, canvas7.width, canvas7.height);
  wrapText(ctx7, $text7.value.toUpperCase(), 22, 18, "MyFont");
}

//This is for 'Remove Initials' button. It's removing the content onclick
function deleteInitials1Inch(){
    ctx7.clearRect(0, 0, 115, 100);
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

var location7 = document.getElementById("canvas7");
var ctxLoc7 = location7.getContext("2d");

  function path7(v7) {
    switch(v7) {
     // top: 103px; left: 210px
        case "rightabove":
            location7.style.top = "92px";
            location7.style.left = "124px";
            location7.style.position = "absolute";
            break;

        case "rightbelow":
            location7.style.top = "134px";
            location7.style.left = "125px";
            location7.style.position = "absolute";
            break;

        case "left":
            location7.style.top = "110px";
            location7.style.left = "210px";
            location7.style.position = "absolute";
            break;

        case "center":
            location7.style.top = "110px";
            location7.style.left = "171px";
            location7.style.position = "absolute";
            break;
            }
  }

//This is for changing colour of the initials 
function color7(v7) {
  v7 = v7.dataset.id;
  switch (v7) {
    // top: 103px; left: 210px

    case "white":
      ctx7.fillStyle = '#ffffff';
      break;

     case "black":
      ctx7.fillStyle = '#000000';
      break;

     case "blue":
      ctx7.fillStyle = '#0033ff';
      break;

     case "red":
      ctx7.fillStyle = '#ff0000';
      break;

     case "navyblue":
      ctx7.fillStyle = '#000066';
      break;

    case "yellow":
      ctx7.fillStyle = "#ffff00";
      break;

    case "green":
      ctx7.fillStyle = "#009933";
      break;

    case "littleblue":
      ctx7.fillStyle = "#33ccff";
      break;

    case "orange":
      ctx7.fillStyle = "#ff9900";
      break;
  }
  redrawTextsCan7();
}