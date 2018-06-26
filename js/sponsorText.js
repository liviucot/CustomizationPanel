//WRITE TEXT, CHANGE COLOR, FONT FOR SPONSOR TEXT

  var canvas11 = document.getElementById("canvas11");
  var ctx11 = canvas11.getContext("2d");
  var selectedTextFont = "Arial Black";
  var selectedFontSize1 = "20px";
  var selectedFontStyle = "bold";
  var selectedFontColor = "#000000";
  var selectedFontSize2 = "20px";

  $('#nametag2').bind('change keyup input', redrawTextsCan11);
  $('#line4').bind('click', redrawTextsCan11);
  $('#line5').bind('click', redrawTextsCan11);

  function redrawTextsCan11() {
    ctx11.clearRect(0, 0, canvas11.width, canvas11.height);
    ctx11.textAlign = "center";
    ctx11.fillStyle = selectedFontColor;
    
    selectedFontSize1 = fitTextOnCanvas(ctx11, $('#line4').val().toUpperCase(), selectedTextFont);
    ctx11.font = selectedFontStyle + " " + selectedFontSize1 + "px " + selectedTextFont;
    ctx11.fillText($('#line4').val().toUpperCase(), canvas11.width * 0.5, 30);
    
    selectedFontSize2 = fitTextOnCanvas(ctx11, $('#line5').val().toUpperCase(), selectedTextFont);
    ctx11.font = selectedFontStyle + " " + selectedFontSize2 + "px " + selectedTextFont;
    ctx11.fillText($('#line5').val().toUpperCase(), canvas11.width * 0.5, 50);
  }

  function fitTextOnCanvas(ctx, text, fontface){    
    var size = measureTextBinaryMethod(ctx, text, fontface, 0, 80, canvas11.width);
    if (size > 18) return 18;
    return size;
  }

  function deleteStandardPrintText(){
    ctx11.clearRect(0, 0, 125, 80);
  } 

  function measureTextBinaryMethod(ctx, text, fontface, min, max, desiredWidth) {
    if (max-min < 1) {
      return min;   
    }
    var test = min+((max-min)/2); //Find half interval
    ctx.font=test+"px "+fontface;
    measureTest = ctx.measureText(text).width;
    if ( measureTest > desiredWidth) {
      var found = measureTextBinaryMethod(ctx, text, fontface, min, test, desiredWidth)
    } else {
      var found = measureTextBinaryMethod(ctx, text, fontface, test, max, desiredWidth)
    }
    return found;
  }

  function color11(v11) {
    v11 = v11.dataset.id;
    switch (v11) {
      // top: 103px; left: 210px

      case "white":
        selectedFontColor = '#ffffff';
        break;

      case "black":
        selectedFontColor = '#000000';
        break;

      case "blue":
        selectedFontColor = '#0033ff';
        break;

      case "red":
        selectedFontColor = "#ff0000";
        break;

      case "navyblue":
        selectedFontColor = '#000066';
        break;

      case "yellow":
        selectedFontColor = "#ffff00";
        break;

      case "green":
        selectedFontColor = "#009933";
        break;

      case "littleblue":
        selectedFontColor = "#33ccff";
        break;

      case "orange":
        selectedFontColor = "#ff9900";
        break;
    }
    redrawTextsCan11();
  }

  function chfont5(v5) {
    switch (v5) {
      // top: 103px; left: 210px
      case "arial":
        selectedTextFont = "Arial Black";
        break;

      case "comic":
        selectedTextFont = "Comic Sans MS";
        break;

      case "lucida":
        selectedTextFont = "Lucida Sans";
        break;

      case "franklin":
        selectedTextFont = "Franklin Gothic";
        break;

      case "impact":
        selectedTextFont = "Impact";
        break;
    }
    redrawTextsCan11();
  }

  var location13 = document.getElementById("canvas11");
  var ctxLoc13 = location13.getContext("2d");

    function path14(v14) {
      switch(v14) {
       // top: 103px; left: 210px
          case "right":
              location13.style.top = "90px";
              location13.style.left = "95px";
              location13.style.position = "absolute";
              break;

          case "left":
              location13.style.top = "113px";
              location13.style.left = "185px";
              location13.style.position = "absolute";
              break;

          case "center":
              location13.style.top = "170px";
              location13.style.left = "131px"; 
              location13.style.position = "absolute";
              break;

          case "toprear":
              location13.style.top = "60px";
              location13.style.left = "505px";
              location13.style.position = "absolute";
              break;

          case "bottomrear":
              location13.style.top = "220px"
              location13.style.left = "509px";
              location13.style.position = "absolute";
              break;
              }
    }