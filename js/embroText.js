//WRITE TEXT, CHANGE COLOR, FONT FOR EMBROIDERY TEXT

            var embroTextCanvas = document.getElementById("embroTextCanvas");
            var embroTextContext = embroTextCanvas.getContext("2d");
            var embroTextFontFamily = "Arial Black";
            var embroTextFontSize = "20px";
            var embroTextFontStyle = "bold";
            var embroTextFontColor = "#000000";
            var $embroText = document.getElementById("embroTextSourceText");

            $embroText.onkeyup = function(e) {
              redrawEmbroText();
            }

            function redrawEmbroText() {
              embroTextContext.clearRect(0, 0, embroTextCanvas.width, embroTextCanvas.height);
              embroTextContext.textAlign = "center";
              embroTextContext.fillStyle = embroTextFontColor;
              
              embroTextFontSize = fitEmbroTextOnCanvas(embroTextContext, $('#embroTextSourceText').val().toUpperCase(), embroTextFontFamily);
              embroTextContext.font = embroTextFontStyle + " " + embroTextFontSize + "px " + embroTextFontFamily;
              
              embroTextContext.fillText($('#embroTextSourceText').val().toUpperCase(), embroTextCanvas.width * 0.5, 30);
            }

            function fitEmbroTextOnCanvas(ctx, text, fontface){    
              var size = embroTextMeasureTextBinMethod(ctx, text, fontface, 0, 80, embroTextCanvas.width);
              if (size > 18) return 18;
              return size;
            }

            function embroTextMeasureTextBinMethod(ctx, text, fontface, min, max, desiredWidth) {
              if (max-min < 1) {
                return min;   
              }
              var test = min+((max-min)/2); //Find half interval
              ctx.font=test+"px "+fontface;
              measureTest = ctx.measureText(text).width;
              if ( measureTest > desiredWidth) {
                var found = embroTextMeasureTextBinMethod(ctx, text, fontface, min, test, desiredWidth)
              } else {
                var found = embroTextMeasureTextBinMethod(ctx, text, fontface, test, max, desiredWidth)
              }
              return found;
            }

            function embroTextColor(v4) {
              v4 = v4.dataset.id;
              switch (v4) {
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
              redrawEmbroText();
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
              redrawEmbroText();
            }
          
            var embroTextLocation = document.getElementById("embroTextCanvas");
            var embroTextCtxLocation = embroTextLocation.getContext("2d");

              function embroTextPath(v14) {
                switch(v14) {
                 // top: 103px; left: 210px
                    case "right":
                        embroTextLocation.style.width = "60px";
                        embroTextLocation.style.height = "26px";
                        embroTextLocation.style.top = "88px";
                        embroTextLocation.style.left = "115px";
                        embroTextLocation.style.position = "absolute";
                        break;

                    case "left":
                        embroTextLocation.style.width = "60px";
                        embroTextLocation.style.height = "26px";
                        embroTextLocation.style.top = "106px";
                        embroTextLocation.style.left = "195px";
                        embroTextLocation.style.position = "absolute";
                        break;

                    case "center":
                        embroTextLocation.style.width = "110px";
                        embroTextLocation.style.height = "30px";
                        embroTextLocation.style.top = "170px";
                        embroTextLocation.style.left = "134px"; 
                        embroTextLocation.style.position = "absolute";
                        break;

                    case "toprear":
                        embroTextLocation.style.width = "110px";
                        embroTextLocation.style.height = "30px";
                        embroTextLocation.style.top = "60px";
                        embroTextLocation.style.left = "512px";
                        embroTextLocation.style.position = "absolute";
                        break;

                    case "bottomrear":
                        embroTextLocation.style.width = "110px";
                        embroTextLocation.style.height = "30px";
                        embroTextLocation.style.top = "235px"
                        embroTextLocation.style.left = "518px";
                        embroTextLocation.style.position = "absolute";
                        break;
                        }
              }