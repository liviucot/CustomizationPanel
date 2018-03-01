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


        //WRITE TEXT AND CHANGE COLOR OF SMALL NUMBERS SECTION 1 INCH

        var canvas5 = document.getElementById("canvas5");
        var ctx5 = canvas5.getContext("2d");

        ctx5.font = "bold 12px MyFont";
        ctx5.fillStyle = "white";
        ctx5.textAlign = "center";

        var $text5 = document.getElementById("sourceText5");

        $text5.onkeyup = function(e) {
          redrawTextsCan5();
        }

        function redrawTextsCan5() {
          ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
          wrapText(ctx5, $text5.value, 13, 18, "MyFont");
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

        var $text12 = document.getElementById("sourceText12");

        $text12.onkeyup = function(e) {
          redrawTextsCan12();
        }

        function redrawTextsCan12() {
          ctx12.clearRect(0, 0, canvas12.width, canvas12.height);
          wrapText(ctx12, $text12.value, 13, 18, "NikeFont");
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


        //WRITE TEXT AND CHANGE COLOR OF SMALL NUMBERS SECTION 3 INCH

        var canvas9 = document.getElementById("canvas9");
        var ctx9 = canvas9.getContext("2d");

        ctx9.font = "bold 16px MyFont";
        ctx9.fillStyle = "white";
        ctx9.textAlign = "center";

        var $text9 = document.getElementById("sourceText9");

        $text9.onkeyup = function(e) {
          redrawTextsCan9();
        }

        function redrawTextsCan9() {
          ctx9.clearRect(0, 0, canvas9.width, canvas9.height);
          wrapText(ctx9, $text9.value, 13, 18, "MyFont");
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


        var location9 = document.getElementById("canvas9");
        var ctxLoc9 = location9.getContext("2d");

          function path9(v9) {
            switch(v9) {
             // top: 103px; left: 210px
                case "rightabove":
                    location9.style.top = "90px";
                    location9.style.left = "131px";
                    location9.style.position = "absolute";
                    break;

                case "rightbelow":
                    location9.style.top = "136px";
                    location9.style.left = "132px";
                    location9.style.position = "absolute";
                    break;

                case "left":
                    location9.style.top = "111px";
                    location9.style.left = "220px";
                    location9.style.position = "absolute";
                    break;

                case "center":
                    location9.style.top = "111px";
                    location9.style.left = "175px";
                    location9.style.position = "absolute";
                    break;
                    }
          }

        function color9(v9) {
          v9 = v9.dataset.id;
          switch (v9) {
            // top: 103px; left: 210px

            case "white":
              ctx9.fillStyle = '#ffffff';
              break;

             case "black":
              ctx9.fillStyle = '#000000';
              break;

             case "blue":
              ctx9.fillStyle = '#0033ff';
              break;

             case "red":
              ctx9.fillStyle = '#ff0000';
              break;

             case "navyblue":
              ctx9.fillStyle = '#000066';
              break;

            case "yellow":
              ctx9.fillStyle = "#ffff00";
              break;

            case "green":
              ctx9.fillStyle = "#009933";
              break;

            case "littleblue":
              ctx9.fillStyle = "#33ccff";
              break;

            case "orange":
              ctx9.fillStyle = "#ff9900";
              break;
          }
          redrawTextsCan9();
        }


        //WRITE TEXT AND CHANGE COLOR OF SMALL NIKE NUMBERS SECTION 3 INCH

        var canvas13 = document.getElementById("canvas13");
        var ctx13 = canvas13.getContext("2d");

        ctx13.font = "bold 16px NikeFont";
        ctx13.fillStyle = "white";
        ctx13.textAlign = "center";

        var $text13 = document.getElementById("sourceText13");

        $text13.onkeyup = function(e) {
          redrawTextsCan13();
        }

        function redrawTextsCan13() {
          ctx13.clearRect(0, 0, canvas13.width, canvas13.height);
          wrapText(ctx13, $text13.value, 13, 18, "NikeFont");
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

        function color13(v9) {
          v9 = v9.dataset.id;
          switch (v9) {
            // top: 103px; left: 210px

            case "white":
              ctx13.fillStyle = '#ffffff';
              break;

             case "black":
              ctx13.fillStyle = '#000000';
              break;

          }
          redrawTextsCan13();
        }

        var location14 = document.getElementById("canvas13");
        var ctxLoc14 = location14.getContext("2d");

          function path13(v9) {
            switch(v9) {
             // top: 103px; left: 210px
                case "rightabove":
                    location14.style.top = "90px";
                    location14.style.left = "131px";
                    location14.style.position = "absolute";
                    break;

                case "rightbelow":
                    location14.style.top = "136px";
                    location14.style.left = "132px";
                    location14.style.position = "absolute";
                    break;

                case "left":
                    location14.style.top = "111px";
                    location14.style.left = "220px";
                    location14.style.position = "absolute";
                    break;

                case "center":
                    location14.style.top = "111px";
                    location14.style.left = "175px";
                    location14.style.position = "absolute";
                    break;
                    }
          }


        //WRITE TEXT AND CHANGE COLOR OF PLAYERS NAME
        /*
          var canvas2 = document.getElementById("canvas2");
          var ctx2 = canvas2.getContext("2d");
          var $playersNameText = document.getElementById("playersNameSourceText");

          $playersNameText.onkeyup = function(e) {
            redrawTextsCan2();
          }

          $('#nametag').bind('change keyup input', redrawTextsCan2);
          $('#line2').bind('click', redrawTextsCan2);

          function redrawTextsCan2() {

            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.textAlign = "center";

            ctx2.font = "bold 21px Arial";

            var width = ctx2.measureText($('#line1').val()).width;

            if (width > 125) {
              ctx2.font = "bold 19px Arial";
            }
            var width = ctx2.measureText($('#line1').val()).width;
            if (width > 125) {
              ctx2.font = "bold 18px Arial";
            }
            var width = ctx2.measureText($('#line1').val()).width;
            if (width > 125) {
              ctx2.font = "bold 17px Arial";
            }
            var width = ctx2.measureText($('#line1').val()).width;
            if (width > 125) {
              ctx2.font = "bold 16px Arial";
            }
            var width = ctx2.measureText($('#line1').val()).width;
            if (width > 125) {
              ctx2.font = "bold 15px Arial";
            }
            
            ctx2.fillText($('#line1').val().toUpperCase(), canvas2.width * 0.5, 20);

          }

          function color2(v2) {
            v2 = v2.dataset.id;
            switch (v2) {
              // top: 103px; left: 210px

              case "white":
                ctx2.fillStyle = '#ffffff';
                break;

               case "black":
                ctx2.fillStyle = '#000000';
                break;

               case "blue":
                ctx2.fillStyle = '#0033ff';
                break;

               case "red":
                ctx2.fillStyle = '#ff0000';
                break;

               case "navyblue":
                ctx2.fillStyle = '#000066';
                break;

              case "yellow":
                ctx2.fillStyle = "#ffff00";
                break;

              case "green":
                ctx2.fillStyle = "#009933";
                break;

              case "littleblue":
                ctx2.fillStyle = "#33ccff";
                break;

              case "orange":
                ctx2.fillStyle = "#ff9900";
                break;
            }
            redrawTextsCan2();
          }

*/
          //WRITE TEXT AND CHANGE COLOR OF CLUB NAME
/*
          var canvas4 = document.getElementById("canvas4");
          var ctx4 = canvas4.getContext("2d");

          ctx4.font = "bold 12px Arial";
          ctx4.fillStyle = "black";
          ctx4.textAlign = "center";

          var $text4 = document.getElementById("sourceText4");

          $text4.onkeyup = function(e) {
            redrawTextsCan4();
          }

          function redrawTextsCan4() {
            ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
            wrapText(ctx4, $text4.value, 55, 20, "Arial");
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


          var location4 = document.getElementById("canvas4");
          var ctxLoc4 = location4.getContext("2d");

            function path4(v4) {
              switch(v4) {
               // top: 103px; left: 210px
                  case "right":
                      location4.style.top = "90px";
                      location4.style.left = "95px";
                      location4.style.position = "absolute";
                      break;

                  case "left":
                      location4.style.top = "113px";
                      location4.style.left = "185px";
                      location4.style.position = "absolute";
                      break;

                  case "center":
                      location4.style.top = "170px";
                      location4.style.left = "134px"; 
                      location4.style.position = "absolute";
                      break;

                  case "toprear":
                      location4.style.top = "65px";
                      location4.style.left = "515px";
                      location4.style.position = "absolute";
                      break;

                  case "bottomrear":
                      location4.style.top = "240px"
                      location4.style.left = "515px";
                      location4.style.position = "absolute";
                      break;
                      }
            }

          function color4(v4) {
            v4 = v4.dataset.id;
            switch (v4) {
              // top: 103px; left: 210px

              case "white":
                ctx4.fillStyle = '#ffffff';
                break;

               case "black":
                ctx4.fillStyle = '#000000';
                break;

               case "blue":
                ctx4.fillStyle = '#0033ff';
                break;

               case "red":
                ctx4.fillStyle = '#ff0000';
                break;

               case "navyblue":
                ctx4.fillStyle = '#000066';
                break;

              case "yellow":
                ctx4.fillStyle = "#ffff00";
                break;

              case "green":
                ctx4.fillStyle = "#009933";
                break;

              case "littleblue":
                ctx4.fillStyle = "#33ccff";
                break;

              case "orange":
                ctx4.fillStyle = "#ff9900";
                break;
            }
            redrawTextsCan4();
          }

          function chfont4(v4) {
              switch(v4) {
               // top: 103px; left: 210px
                  case "arial":
                      ctx4.font = "bold 14px Arial Black"; 
                      break;

                  case "comic":
                      ctx4.font = "bold 14px Comic Sans MS";
                      break;

                  case "lucida":
                      ctx4.font = "bold 14px Lucida Sans";
                      break;

                  case "franklin":
                      ctx4.font = "bold 14px Franklin Gothic";
                      break;

                  case "impact":
                      ctx4.font = "16px Impact";
                      break;
                    }
                redrawTextsCan4();  
            }

*/  
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
              /*
              function color11(v11) {
                v11 = v11.dataset.id;
                switch (v11) {
                  // top: 103px; left: 210px

                  case "white":
                    ctx11.fillStyle = '#ffffff';
                    break;

                   case "black":
                    ctx11.fillStyle = '#000000';
                    break;

                   case "blue":
                    ctx11.fillStyle = '#0033ff';
                    break;

                   case "red":
                    ctx11.fillStyle = '#ff0000';
                    break;

                   case "navyblue":
                    ctx11.fillStyle = '#000066';
                    break;

                  case "yellow":
                    ctx11.fillStyle = "#ffff00";
                    break;

                  case "green":
                    ctx11.fillStyle = "#009933";
                    break;

                  case "littleblue":
                    ctx11.fillStyle = "#33ccff";
                    break;

                  case "orange":
                    ctx11.fillStyle = "#ff9900";
                    break;
                }
                redrawTextsCan11();
              }
              */


          //WRITE TEXT AND CHANGE COLOR OF 1" INITIALS

          var canvas7 = document.getElementById("canvas7");
          var ctx7 = canvas7.getContext("2d");

          ctx7.font = "bold 12px Arial";
          ctx7.fillStyle = "black";
          ctx7.textAlign = "center";

          var $text7 = document.getElementById("sourceText7");

          $text7.onkeyup = function(e) {
            redrawTextsCan7();
          }

          function redrawTextsCan7() {
            ctx7.clearRect(0, 0, canvas7.width, canvas7.height);
            wrapText(ctx7, $text7.value, 22, 18, "MyFont");
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
          wrapText(ctx10, $text10.value, 22, 18, "Arial");
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

       /* //WRITE TEXT AND CHANGE COLOR OF EMBROIDERY TEXT

        var canvas3 = document.getElementById("canvas3");
        var ctx3 = canvas3.getContext("2d");

        ctx3.font = "bold 12px Arial";
        ctx3.fillStyle = "black";
        ctx3.textAlign = "center";

        var $text3 = document.getElementById("sourceText3");

        $text3.onkeyup = function(e) {
          redrawTextsCan3();
        }

        function redrawTextsCan3() {
          ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          wrapText(ctx3, $text3.value, 55, 20, "Arial");
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


        var location3 = document.getElementById("canvas3");
        var ctxLoc3 = location3.getContext("2d");

          function path3(v3) {
            switch(v3) {
             // top: 103px; left: 210px
                case "right":
                    location3.style.top = "90px";
                    location3.style.left = "95px";
                    location3.style.position = "absolute";
                    ctx3.font = "bold 14px Arial Black";
                    break;

                case "left":
                    location3.style.top = "113px";
                    location3.style.left = "185px";
                    location3.style.position = "absolute";
                    break;

                case "center":
                    location3.style.top = "170px";
                    location3.style.left = "134px"; 
                    location3.style.position = "absolute";
                    break;
                  }
          }

        function color3(v3) {
          v3 = v3.dataset.id;
          switch (v3) {
            // top: 103px; left: 210px

            case "white":
              ctx3.fillStyle = '#ffffff';
              break;

             case "black":
              ctx3.fillStyle = '#000000';
              break;

             case "blue":
              ctx3.fillStyle = '#0033ff';
              break;

             case "red":
              ctx3.fillStyle = '#ff0000';
              break;

             case "navyblue":
              ctx3.fillStyle = '#000066';
              break;

            case "yellow":
              ctx3.fillStyle = "#ffff00";
              break;

            case "green":
              ctx3.fillStyle = "#009933";
              break;

            case "littleblue":
              ctx3.fillStyle = "#33ccff";
              break;

            case "orange":
              ctx3.fillStyle = "#ff9900";
              break;
          }
          redrawTextsCan3();
        }

          function chfont3(v3) {
            switch(v3) {
             // top: 103px; left: 210px
                case "arial":
                    ctx3.font = "bold 14px Arial Black";
                    break;

                case "comic":
                    ctx3.font = "bold 14px Comic Sans MS";
                    break;

                case "lucida":
                    ctx3.font = "bold 14px Lucida Sans";
                    break;

                case "franklin":
                    ctx3.font = "bold 14px Franklin Gothic";
                    break;

                case "impact":
                    ctx3.font = "16px Impact";
                    break;
                  }
              redrawTextsCan3();  
          }
          */

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

          //CLUB BADGE UPLOAD - myCanvas - path

          var canvasN = document.getElementById('myCanvas');
          var ctxN = canvasN.getContext('2d');

          var fileInput = document.getElementById('imageLoader');
          fileInput.addEventListener('change', imageLoader, false);

          function imageLoader() {
            img = new Image();
            img.onload = function() {

              var MAX_WIDTH = 40;
              var MAX_HEIGHT = 40;
              var width = img.width;
              var height = img.height;

              if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }
              var x = (MAX_WIDTH - width) / 2;
              var y = (MAX_HEIGHT - height) / 2;
              ctxN.clearRect(0, 0, canvasN.width, canvasN.height);
              ctxN.drawImage(img, x, y, width, height);
            }
            img.src = URL.createObjectURL(fileInput.files[0]);
          }

          var cN = document.getElementById("myCanvas");
          var ctxN = cN.getContext("2d");

          function pathN(v) {
            switch (v) {
              // top: 103px; left: 210px
              case "right":
                cN.style.left = "120px";
                cN.style.top = "103px";
                cN.style.position = "absolute";
                break;
              case "left":
                cN.style.top = "103px";
                cN.style.left = "210px";
                cN.style.position = "absolute";
                break;
              case "center":
                cN.style.top = "103px";
                cN.style.left = "167px";
                cN.style.position = "absolute";
                break;
            }
          }

          //ADDITIONAL CLUB BADGE UPLOAD - myCanvas3 - pathN3

          var canvasN3 = document.getElementById('myCanvas3');
          var ctxN3 = canvasN3.getContext('2d');

          var fileInput3 = document.getElementById('imageLoader3');
          fileInput3.addEventListener('change', imageLoader3, false);

          function imageLoader3() {
            img = new Image();
            img.onload = function() {

              var MAX_WIDTH = 40;
              var MAX_HEIGHT = 40;
              var width = img.width;
              var height = img.height;

              if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }
              var x = (MAX_WIDTH - width) / 2;
              var y = (MAX_HEIGHT - height) / 2;
              ctxN3.clearRect(0, 0, canvasN3.width, canvasN3.height);
              ctxN3.drawImage(img, x, y, width, height);
            }
            img.src = URL.createObjectURL(fileInput3.files[0]);
          }

          var cN3 = document.getElementById("myCanvas3");
          var ctxN3 = cN3.getContext("2d");

          function pathN3(v) {
            switch (v) {
              // top: 103px; left: 210px
              case "right":
                cN3.style.left = "120px";
                cN3.style.top = "103px";
                cN3.style.position = "absolute";
                break;
              case "left":
                cN3.style.top = "103px";
                cN3.style.left = "210px";
                cN3.style.position = "absolute";
                break;
              case "center":
                cN3.style.top = "103px";
                cN3.style.left = "167px";
                cN3.style.position = "absolute";
                break;
            }
          }

          //SPONSOR LOGO UPLOAD - myCanvas2 - pathN2

          var canvasN2 = document.getElementById('myCanvas2');
          var ctxN2 = canvasN2.getContext('2d');

          var fileInput2 = document.getElementById('imageLoader2');
          fileInput2.addEventListener('change', imageLoader2, false);

          function imageLoader2() {
            img = new Image();
            img.onload = function() {

              var MAX_WIDTH = 115;
              var MAX_HEIGHT = 100;
              var width = img.width;
              var height = img.height;

              if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }
              var x = (MAX_WIDTH - width) / 2;
              var y = (MAX_HEIGHT - height) / 2;
              ctxN2.clearRect(0, 0, canvasN2.width, canvasN2.height);
              ctxN2.drawImage(img, x, y, width, height);
            }
            img.src = URL.createObjectURL(fileInput2.files[0]);
          }

          var cN2 = document.getElementById("myCanvas2");
          var ctxN2 = cN2.getContext("2d");

          function pathN2(v) {
            switch (v) {
              // top: 103px; left: 210px
              case "right":
                  cN2.style.width = "50px";
                  cN2.style.height = "50px";
                  cN2.style.top = "87px";
                  cN2.style.left = "120px";
                  cN2.style.position = "absolute";
                  break;

              case "left":
                  cN2.style.width = "50px";
                  cN2.style.height = "50px";
                  cN2.style.top = "100px";
                  cN2.style.left = "200px";
                  cN2.style.position = "absolute";
                  break;

              case "center":
                  cN2.style.width = "115px";
                  cN2.style.height = "100px";
                  cN2.style.top = "140px";
                  cN2.style.left = "133px";
                  cN2.style.position = "absolute";
                  break;

              case "toprear":
                  cN2.style.width = "115px";
                  cN2.style.height = "100px";
                  cN2.style.top = "43px";
                  cN2.style.left = "515px";
                  cN2.style.position = "absolute";
                  break;

              case "bottomrear":
                  cN2.style.width = "115px";
                  cN2.style.height = "100px";
                  cN2.style.top = "210px";
                  cN2.style.left = "517px";
                  cN2.style.position = "absolute";
                  break;
                  }
                }



                //ADDITIONAL SPONSOR LOGO UPLOAD - myCanvas4 - pathN4

                var canvasN4 = document.getElementById('myCanvas4');
                var ctxN4 = canvasN4.getContext('2d');

                var fileInput4 = document.getElementById('imageLoader4');
                fileInput4.addEventListener('change', imageLoader4, false);

                function imageLoader4() {
                  img = new Image();
                  img.onload = function() {

                    var MAX_WIDTH = 115;
                    var MAX_HEIGHT = 100;
                    var width = img.width;
                    var height = img.height;

                    if (width > height) {
                      if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                      }
                    } else {
                      if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                      }
                    }
                    var x = (MAX_WIDTH - width) / 2;
                    var y = (MAX_HEIGHT - height) / 2;
                    ctxN4.clearRect(0, 0, canvasN4.width, canvasN4.height);
                    ctxN4.drawImage(img, x, y, width, height);
                  }
                  img.src = URL.createObjectURL(fileInput4.files[0]);
                }

                var cN4 = document.getElementById("myCanvas4");
                var ctxN4 = cN4.getContext("2d");

                function pathN4(v) {
                  switch (v) {
                    // top: 103px; left: 210px
                    case "right":
                        cN4.style.width = "50px";
                        cN4.style.height = "50px";
                        cN4.style.top = "87px";
                        cN4.style.left = "120px";
                        cN4.style.position = "absolute";
                        break;

                    case "left":
                        cN4.style.width = "50px";
                        cN4.style.height = "50px";
                        cN4.style.top = "100px";
                        cN4.style.left = "200px";
                        cN4.style.position = "absolute";
                        break;

                    case "center":
                        cN4.style.width = "115px";
                        cN4.style.height = "100px";
                        cN4.style.top = "140px";
                        cN4.style.left = "133px";
                        cN4.style.position = "absolute";
                        break;

                    case "toprear":
                        cN4.style.width = "115px";
                        cN4.style.height = "100px";
                        cN4.style.top = "43px";
                        cN4.style.left = "515px";
                        cN4.style.position = "absolute";
                        break;

                    case "bottomrear":
                        cN4.style.width = "115px";
                        cN4.style.height = "100px";
                        cN4.style.top = "210px";
                        cN4.style.left = "517px";
                        cN4.style.position = "absolute";
                        break;
                        }
                      }


          // SPONSOR LOGO - STANDARD TEXT PRINT


          