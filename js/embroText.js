//WRITE TEXT, CHANGE COLOR, FONT FOR SPONSOR TEXT

  var embroTextCanvas = document.getElementById("embroTextCanvas");
  var embroTextContext = embroTextCanvas.getContext("2d");
  var embroTextFontFamily = "Arial Black";
  var embroTextFontSize1 = "20px";
  var embroTextFontStyle = "bold";
  var embroTextFontColor = "#000000";
  var embroTextFontSize2 = "20px";

  $('#embroTextTag2').bind('change keyup input', embroTextRedraw);
  $('#embroTextLine1').bind('click', embroTextRedraw);
  $('#embroTextLine2').bind('click', embroTextRedraw);

  function embroTextRedraw() {
    embroTextContext.clearRect(0, 0, embroTextCanvas.width, embroTextCanvas.height);
    embroTextContext.textAlign = "center";
    embroTextContext.fillStyle = embroTextFontColor;
    
    embroTextFontSize1 = embroTextFitOnCanvas(embroTextContext, $('#embroTextLine1').val().toUpperCase(), embroTextFontFamily);
    embroTextContext.font = embroTextFontStyle + " " + embroTextFontSize1 + "px " + embroTextFontFamily;
    embroTextContext.fillText($('#embroTextLine1').val().toUpperCase(), embroTextCanvas.width * 0.5, 30);
    
    embroTextFontSize2 = embroTextFitOnCanvas(embroTextContext, $('#embroTextLine2').val().toUpperCase(), embroTextFontFamily);
    embroTextContext.font = embroTextFontStyle + " " + embroTextFontSize2 + "px " + embroTextFontFamily;
    embroTextContext.fillText($('#embroTextLine2').val().toUpperCase(), embroTextCanvas.width * 0.5, 50);
  }

  function embroTextFitOnCanvas(ctx, text, fontface){    
    var size = measureTextBinaryMethod(ctx, text, fontface, 0, 80, embroTextCanvas.width);
    if (size > 18) return 18;
    return size;
  }

  function deleteEmbroideryText(){
    embroTextContext.clearRect(0, 0, 115, 100);
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

  function embroTextColor(v11) {
    v11 = v11.dataset.id;
    switch (v11) {
      // top: 103px; left: 210px

      case "white":
        embroTextFontColor = '#ffffff';
        break;

      case "black":
        embroTextFontColor = '#000000';
        break;

      case "blue":
        embroTextFontColor = '#0033ff';
        break;

      case "red":
        embroTextFontColor = "#ff0000";
        break;

      case "navyblue":
        embroTextFontColor = '#000066';
        break;

      case "yellow":
        embroTextFontColor = "#ffff00";
        break;

      case "green":
        embroTextFontColor = "#009933";
        break;

      case "littleblue":
        embroTextFontColor = "#33ccff";
        break;

      case "orange":
        embroTextFontColor = "#ff9900";
        break;
    }
    embroTextRedraw();
  }

  function changeEmbroTextFontFamily(v5) {
    switch (v5) {
      // top: 103px; left: 210px
      case "arial":
        embroTextFontFamily = "Arial Black";
        break;

      case "comic":
        embroTextFontFamily = "Comic Sans MS";
        break;

      case "lucida":
        embroTextFontFamily = "Lucida Sans";
        break;

      case "franklin":
        embroTextFontFamily = "Franklin Gothic";
        break;

      case "impact":
        embroTextFontFamily = "Impact";
        break;
    }
    embroTextRedraw();
  }

  var embroTextLocation = document.getElementById("embroTextCanvas");
  var embroTextCtxLocation = embroTextLocation.getContext("2d");

    function embroTextPath(v14) {
      switch(v14) {
   // top: 103px; left: 210px
      case "right":
          embroTextLocation.style.width = "60px";
          embroTextLocation.style.height = "46px";
          embroTextLocation.style.top = "88px";
          embroTextLocation.style.left = "115px";
          embroTextLocation.style.position = "absolute";
          break;

      case "left":
          embroTextLocation.style.width = "60px";
          embroTextLocation.style.height = "46px";
          embroTextLocation.style.top = "106px";
          embroTextLocation.style.left = "195px";
          embroTextLocation.style.position = "absolute";
          break;

      case "center":
          embroTextLocation.style.width = "110px";
          embroTextLocation.style.height = "80px";
          embroTextLocation.style.top = "170px";
          embroTextLocation.style.left = "134px"; 
          embroTextLocation.style.position = "absolute";
          break;

      case "toprear":
          embroTextLocation.style.width = "110px";
          embroTextLocation.style.height = "80px";
          embroTextLocation.style.top = "60px";
          embroTextLocation.style.left = "512px";
          embroTextLocation.style.position = "absolute";
          break;

      case "bottomrear":
          embroTextLocation.style.width = "110px";
          embroTextLocation.style.height = "80px";
          embroTextLocation.style.top = "235px"
          embroTextLocation.style.left = "518px";
          embroTextLocation.style.position = "absolute";
          break;
          }
    }