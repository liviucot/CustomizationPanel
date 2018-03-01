//ADDITIONAL SPONSOR LOGO 2+ COLORS UPLOAD - addSponColorsLocation - addSponColorsLocation

      var addSpon2ColorCanvas = document.getElementById('addSpon2ColorCanvas');
      var addSpon2ColorCtxLocation = addSpon2ColorCanvas.getContext('2d');

      var addSpon2ColorInput = document.getElementById('addSpon2ColorImgLoader');
      addSpon2ColorInput.addEventListener('change', addSpon2ColorImgLoader, false);

      function addSpon2ColorImgLoader() {
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
          addSpon2ColorCtxLocation.clearRect(0, 0, addSpon2ColorCanvas.width, addSpon2ColorCanvas.height);
          addSpon2ColorCtxLocation.drawImage(img, x, y, width, height);
        }
        img.src = URL.createObjectURL(addSpon2ColorInput.files[0]);
      }

      var addSpon2ColorCanLocation = document.getElementById("addSpon2ColorCanvas");
      var addSpon2ColorCtxLocation = addSpon2ColorCanLocation.getContext("2d");

      function addSponColorsLocation(v) {
        switch (v) {
          // top: 103px; left: 210px
          case "right":
              addSpon2ColorCanLocation.style.width = "50px";
              addSpon2ColorCanLocation.style.height = "50px";
              addSpon2ColorCanLocation.style.top = "87px";
              addSpon2ColorCanLocation.style.left = "120px";
              addSpon2ColorCanLocation.style.position = "absolute";
              break;

          case "left":
              addSpon2ColorCanLocation.style.width = "50px";
              addSpon2ColorCanLocation.style.height = "50px";
              addSpon2ColorCanLocation.style.top = "100px";
              addSpon2ColorCanLocation.style.left = "200px";
              addSpon2ColorCanLocation.style.position = "absolute";
              break;

          case "center":
              addSpon2ColorCanLocation.style.width = "115px";
              addSpon2ColorCanLocation.style.height = "100px";
              addSpon2ColorCanLocation.style.top = "140px";
              addSpon2ColorCanLocation.style.left = "133px";
              addSpon2ColorCanLocation.style.position = "absolute";
              break;

          case "toprear":
              addSpon2ColorCanLocation.style.width = "115px";
              addSpon2ColorCanLocation.style.height = "100px";
              addSpon2ColorCanLocation.style.top = "43px";
              addSpon2ColorCanLocation.style.left = "515px";
              addSpon2ColorCanLocation.style.position = "absolute";
              break;

          case "bottomrear":
              addSpon2ColorCanLocation.style.width = "115px";
              addSpon2ColorCanLocation.style.height = "100px";
              addSpon2ColorCanLocation.style.top = "210px";
              addSpon2ColorCanLocation.style.left = "517px";
              addSpon2ColorCanLocation.style.position = "absolute";
              break;
              }
            }