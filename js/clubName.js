//WRITE TEXT, CHANGE COLOR, FONT FOR CLUB NAME

            var clubNameCanvas = document.getElementById("clubNameCanvas");
            var clubNameContext = clubNameCanvas.getContext("2d");
            var clubNameFontFamily = "Arial Black";
            var clubNameFontSize = "20px";
            var clubNameFontStyle = "bold";
            var clubNameFontColor = "#000000";
            var $clubNameText = document.getElementById("clubNameSourceText");

            $clubNameText.onkeyup = function(e) {
              redrawClubName();
            }

            function redrawClubName() {
              clubNameContext.clearRect(0, 0, clubNameCanvas.width, clubNameCanvas.height);
              clubNameContext.textAlign = "center";
              clubNameContext.fillStyle = clubNameFontColor;
              
              clubNameFontSize = fitClubNameOnCanvas(clubNameContext, $('#clubNameSourceText').val().toUpperCase(), clubNameFontFamily);
              clubNameContext.font = clubNameFontStyle + " " + clubNameFontSize + "px " + clubNameFontFamily;
              
              clubNameContext.fillText($('#clubNameSourceText').val().toUpperCase(), clubNameCanvas.width * 0.5, 30);
            }

            function fitClubNameOnCanvas(ctx, text, fontface){    
              var size = clubNameMeasureTextBinMethod(ctx, text, fontface, 0, 80, clubNameCanvas.width);
              if (size > 18) return 18;
              return size;
            }

            function clubNameMeasureTextBinMethod(ctx, text, fontface, min, max, desiredWidth) {
              if (max-min < 1) {
                return min;   
              }
              var test = min+((max-min)/2); //Find half interval
              ctx.font=test+"px "+fontface;
              measureTest = ctx.measureText(text).width;
              if ( measureTest > desiredWidth) {
                var found = clubNameMeasureTextBinMethod(ctx, text, fontface, min, test, desiredWidth)
              } else {
                var found = clubNameMeasureTextBinMethod(ctx, text, fontface, test, max, desiredWidth)
              }
              return found;
            }

            function clubNameColor(v4) {
              v4 = v4.dataset.id;
              switch (v4) {
                // top: 103px; left: 210px

                case "white":
                  clubNameFontColor = '#ffffff';
                  break;

                case "black":
                  clubNameFontColor = '#000000';
                  break;

                case "blue":
                  clubNameFontColor = '#0033ff';
                  break;

                case "red":
                  clubNameFontColor = "#ff0000";
                  break;

                case "navyblue":
                  clubNameFontColor = '#000066';
                  break;

                case "yellow":
                  clubNameFontColor = "#ffff00";
                  break;

                case "green":
                  clubNameFontColor = "#009933";
                  break;

                case "littleblue":
                  clubNameFontColor = "#33ccff";
                  break;

                case "orange":
                  clubNameFontColor = "#ff9900";
                  break;
              }
              redrawClubName();
            }

            function changeClubNameFontFamily(v5) {
              switch (v5) {
                // top: 103px; left: 210px
                case "arial":
                  clubNameFontFamily = "Arial Black";
                  break;

                case "comic":
                  clubNameFontFamily = "Comic Sans MS";
                  break;

                case "lucida":
                  clubNameFontFamily = "Lucida Sans";
                  break;

                case "franklin":
                  clubNameFontFamily = "Franklin Gothic";
                  break;

                case "impact":
                  clubNameFontFamily = "Impact";
                  break;
              }
              redrawClubName();
            }
          
            var clubNameLocation = document.getElementById("clubNameCanvas");
            var clubNameCtxLocation = clubNameLocation.getContext("2d");

              function clubNamePath(v14) {
                switch(v14) {
                 // top: 103px; left: 210px
                    case "right":
                        clubNameLocation.style.width = "60px";
                        clubNameLocation.style.height = "26px";
                        clubNameLocation.style.top = "88px";
                        clubNameLocation.style.left = "115px";
                        clubNameLocation.style.position = "absolute";
                        break;

                    case "left":
                        clubNameLocation.style.width = "60px";
                        clubNameLocation.style.height = "26px";
                        clubNameLocation.style.top = "106px";
                        clubNameLocation.style.left = "195px";
                        clubNameLocation.style.position = "absolute";
                        break;

                    case "center":
                        clubNameLocation.style.width = "110px";
                        clubNameLocation.style.height = "35px";
                        clubNameLocation.style.top = "170px";
                        clubNameLocation.style.left = "134px"; 
                        clubNameLocation.style.position = "absolute";
                        break;

                    case "toprear":
                        clubNameLocation.style.width = "110px";
                        clubNameLocation.style.height = "35px";
                        clubNameLocation.style.top = "60px";
                        clubNameLocation.style.left = "512px";
                        clubNameLocation.style.position = "absolute";
                        break;

                    case "bottomrear":
                        clubNameLocation.style.width = "110px";
                        clubNameLocation.style.height = "35px";
                        clubNameLocation.style.top = "235px"
                        clubNameLocation.style.left = "518px";
                        clubNameLocation.style.position = "absolute";
                        break;
                        }
              }