//WRITE TEXT, CHANGE COLOR, FONT FOR ADDITIONAL SPONSOR TEXT

  var addSponsorTxtCanvas = document.getElementById("addSponsorTxtCanvas");
  var addSponsorTxtContext = addSponsorTxtCanvas.getContext("2d");
  var addSponsTxt_selectedTextFont = "Arial Black";
  var addSponsTxt_selectedFontSize1 = "20px";
  var addSponsTxt_selectedFontStyle = "bold";
  var addSponsTxt_selectedFontColor = "#000000";
  var addSponsTxt_selectedFontSize2 = "20px";

  $('#addSponsorTxtNametag').bind('change keyup input', addSponsTxtRedrawTextCanvas);
  $('#addSponsTxtLine1').bind('click', addSponsTxtRedrawTextCanvas);
  $('#addSponsTxtLine2').bind('click', addSponsTxtRedrawTextCanvas);

  function addSponsTxtRedrawTextCanvas() {
    addSponsorTxtContext.clearRect(0, 0, addSponsorTxtCanvas.width, addSponsorTxtCanvas.height);
    addSponsorTxtContext.textAlign = "center";
    addSponsorTxtContext.fillStyle = addSponsTxt_selectedFontColor;
    
    addSponsTxt_selectedFontSize1 = addSponsTxtFitOnCanvas(addSponsorTxtContext, $('#addSponsTxtLine1').val().toUpperCase(), addSponsTxt_selectedTextFont);
    addSponsorTxtContext.font = addSponsTxt_selectedFontStyle + " " + addSponsTxt_selectedFontSize1 + "px " + addSponsTxt_selectedTextFont;
    addSponsorTxtContext.fillText($('#addSponsTxtLine1').val().toUpperCase(), addSponsorTxtCanvas.width * 0.5, 30);
    
    addSponsTxt_selectedFontSize2 = addSponsTxtFitOnCanvas(addSponsorTxtContext, $('#addSponsTxtLine2').val().toUpperCase(), addSponsTxt_selectedTextFont);
    addSponsorTxtContext.font = addSponsTxt_selectedFontStyle + " " + addSponsTxt_selectedFontSize2 + "px " + addSponsTxt_selectedTextFont;
    addSponsorTxtContext.fillText($('#addSponsTxtLine2').val().toUpperCase(), addSponsorTxtCanvas.width * 0.5, 50);
  }

  function addSponsTxtFitOnCanvas(ctx, text, fontface){    
    var size = addSponsTxtMeasureBinaryMethod(ctx, text, fontface, 0, 80, addSponsorTxtCanvas.width);
    if (size > 18) return 18;
    return size;
  }

  function deleteAdditionalSponsorText(){
    addSponsorTxtContext.clearRect(0, 0, 125, 80);
  } 

  function addSponsTxtMeasureBinaryMethod(ctx, text, fontface, min, max, desiredWidth) {
    if (max-min < 1) {
      return min;   
    }
    var test = min+((max-min)/2); //Find half interval
    ctx.font=test+"px "+fontface;
    measureTest = ctx.measureText(text).width;
    if ( measureTest > desiredWidth) {
      var found = addSponsTxtMeasureBinaryMethod(ctx, text, fontface, min, test, desiredWidth)
    } else {
      var found = addSponsTxtMeasureBinaryMethod(ctx, text, fontface, test, max, desiredWidth)
    }
    return found;
  }

  function addSponsTxtColor(v11) {
    v11 = v11.dataset.id;
    switch (v11) {
      // top: 103px; left: 210px

      case "white":
        addSponsTxt_selectedFontColor = '#ffffff';
        break;

      case "black":
        addSponsTxt_selectedFontColor = '#000000';
        break;

      case "blue":
        addSponsTxt_selectedFontColor = '#0033ff';
        break;

      case "red":
        addSponsTxt_selectedFontColor = "#ff0000";
        break;

      case "navyblue":
        addSponsTxt_selectedFontColor = '#000066';
        break;

      case "yellow":
        addSponsTxt_selectedFontColor = "#ffff00";
        break;

      case "green":
        addSponsTxt_selectedFontColor = "#009933";
        break;

      case "littleblue":
        addSponsTxt_selectedFontColor = "#33ccff";
        break;

      case "orange":
        addSponsTxt_selectedFontColor = "#ff9900";
        break;
    }
    addSponsTxtRedrawTextCanvas();
  }

  function addSponsTxtChangeFont(v5) {
    switch (v5) {
      // top: 103px; left: 210px
      case "arial":
        addSponsTxt_selectedTextFont = "Arial Black";
        break;

      case "comic":
        addSponsTxt_selectedTextFont = "Comic Sans MS";
        break;

      case "lucida":
        addSponsTxt_selectedTextFont = "Lucida Sans";
        break;

      case "franklin":
        addSponsTxt_selectedTextFont = "Franklin Gothic";
        break;

      case "impact":
        addSponsTxt_selectedTextFont = "Impact";
        break;
    }
    addSponsTxtRedrawTextCanvas();
  }

  var addSponsTxtLocation = document.getElementById("addSponsorTxtCanvas");
  var addSponsTxtLocationContext = addSponsTxtLocation.getContext("2d");

    function addSponsTxtPath(v14) {
      switch(v14) {
       // top: 103px; left: 210px
          case "right":
              addSponsTxtLocation.style.top = "90px";
              addSponsTxtLocation.style.left = "95px";
              addSponsTxtLocation.style.position = "absolute";
              break;

          case "left":
              addSponsTxtLocation.style.top = "113px";
              addSponsTxtLocation.style.left = "185px";
              addSponsTxtLocation.style.position = "absolute";
              break;

          case "center":
              addSponsTxtLocation.style.top = "170px";
              addSponsTxtLocation.style.left = "131px"; 
              addSponsTxtLocation.style.position = "absolute";
              break;

          case "toprear":
              addSponsTxtLocation.style.top = "60px";
              addSponsTxtLocation.style.left = "505px";
              addSponsTxtLocation.style.position = "absolute";
              break;

          case "bottomrear":
              addSponsTxtLocation.style.top = "220px"
              addSponsTxtLocation.style.left = "509px";
              addSponsTxtLocation.style.position = "absolute";
              break;
              }

              addSponsTxtRedrawTextCanvas();
    }