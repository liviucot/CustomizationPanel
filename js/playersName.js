//WRITE TEXT, CHANGE COLOR, FONT FOR PLAYERS NAME

            var playersNameCanvas = document.getElementById("playersNameCanvas");
            var playersNameContext = playersNameCanvas.getContext("2d");
            var playersNameFontFamily = "Arial Black";
            var playersNameFontSize = "22px";
            var playersNameFontStyle = "bold";
            var playersNameFontColor = "#000000";
            var $playersNameText = document.getElementById("playersNameSourceText");

            $playersNameText.onkeyup = function(e) {
              redrawPlayersName();
            }

            function redrawPlayersName() {
              playersNameContext.clearRect(0, 0, playersNameCanvas.width, playersNameCanvas.height);
              playersNameContext.textAlign = "center";
              playersNameContext.fillStyle = playersNameFontColor;
              
              playersNameFontSize = fitPlayersNameOnCanvas(playersNameContext, $('#playersNameSourceText').val().toUpperCase(), playersNameFontFamily);
              playersNameContext.font = playersNameFontStyle + " " + playersNameFontSize + "px " + playersNameFontFamily;
              
              playersNameContext.fillText($('#playersNameSourceText').val().toUpperCase(), playersNameCanvas.width * 0.5, 30);
            }

            function fitPlayersNameOnCanvas(ctx, text, fontface){    
              var size = playersNameMeasureTextBinMethod(ctx, text, fontface, 0, 80, playersNameCanvas.width);
              if (size > 20) return 20;
              return size;
            }

            function playersNameMeasureTextBinMethod(ctx, text, fontface, min, max, desiredWidth) {
              if (max-min < 1) {
                return min;   
              }
              var test = min+((max-min)/2); //Find half interval
              ctx.font=test+"px "+fontface;
              measureTest = ctx.measureText(text).width;
              if ( measureTest > desiredWidth) {
                var found = playersNameMeasureTextBinMethod(ctx, text, fontface, min, test, desiredWidth)
              } else {
                var found = playersNameMeasureTextBinMethod(ctx, text, fontface, test, max, desiredWidth)
              }
              return found;
            }

            function playersNameColor(v4) {
              v4 = v4.dataset.id;
              switch (v4) {
                // top: 103px; left: 210px

                case "white":
                  playersNameFontColor = '#ffffff';
                  break;

                case "black":
                  playersNameFontColor = '#000000';
                  break;

                case "blue":
                  playersNameFontColor = '#0033ff';
                  break;

                case "red":
                  playersNameFontColor = "#ff0000";
                  break;

                case "navyblue":
                  playersNameFontColor = '#000066';
                  break;

                case "yellow":
                  playersNameFontColor = "#ffff00";
                  break;

                case "green":
                  playersNameFontColor = "#009933";
                  break;

                case "littleblue":
                  playersNameFontColor = "#33ccff";
                  break;

                case "orange":
                  playersNameFontColor = "#ff9900";
                  break;
              }
              redrawPlayersName();
            }