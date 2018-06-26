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

      function deleteAdditional1ColourSponsorLogo(){
            ctxN4.clearRect(0, 0, 115, 100);
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

