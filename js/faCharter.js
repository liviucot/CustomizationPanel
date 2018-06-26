//FA CHARTER EMBROIDERED BADGE

var charterCanvas1 = document.getElementById("c1");
var charterContext1 = charterCanvas1.getContext("2d");

var stdEmbroMcDonalds = new Image();
  stdEmbroMcDonalds.src = 'images/test.png';

function uploadBadge(){
  charterContext1.drawImage(stdEmbroMcDonalds, 0, 0, 30, 59);
}

function deleteBadge(){
  charterContext1.clearRect(1, 1, 600, 300);
}

var badgeLocation = document.getElementById("c1");
var badgeLocationContext = badgeLocation.getContext("2d");

function charterLocation(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation.style.top = "97px";
        badgeLocation.style.left = "125px";
        badgeLocation.style.position = "absolute";
        break;

      case "left":
        badgeLocation.style.top = "97px";
        badgeLocation.style.left = "213px";
        badgeLocation.style.position = "absolute";
        break;

      case "center":
        badgeLocation.style.top = "103px";
        badgeLocation.style.left = "171px";
        lbadgeLocation1.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation.style.top = "108px";
        badgeLocation.style.left = "78px";
        badgeLocation.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation.style.top = "108px";
        badgeLocation.style.left = "269px";
        badgeLocation.style.position = "absolute";
        break;
    }
}

//FA CHARTER EMBROIDERED BADGE NO MCDONALDS

var charterCanvas2 = document.getElementById("c2");
var charterContext2 = charterCanvas2.getContext("2d");

 var stdClub = new Image();
  stdClub.src = 'images/standardclub.png';

function uploadBadge2(){
  charterContext2.drawImage(stdClub, 0, 0, 30, 59);
}

function deleteBadge2(){
  charterContext2.clearRect(1, 1, 600, 300);
}

var badgeLocation2 = document.getElementById("c2");
var badgeLocationContext2 = badgeLocation2.getContext("2d");

function charterLocation2(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation2.style.top = "100px";
        badgeLocation2.style.left = "129px";
        badgeLocation2.style.position = "absolute";
        break;

      case "left":
        badgeLocation2.style.top = "100px";
        badgeLocation2.style.left = "215px";
        badgeLocation2.style.position = "absolute";
        break;

      case "center":
        badgeLocation2.style.top = "100px";
        badgeLocation2.style.left = "174px";
        badgeLocation2.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation2.style.top = "114px";
        badgeLocation2.style.left = "84px";
        badgeLocation2.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation2.style.top = "114px";
        badgeLocation2.style.left = "269px";
        badgeLocation2.style.position = "absolute";
        break;
    }
}

//FA CHARTER DEVELOPMENT EMBROIDERED BADGE

var charterCanvas3 = document.getElementById("c3");
var charterContext3 = charterCanvas3.getContext("2d");

var devEmbroBadge = new Image();
  devEmbroBadge.src = 'images/standardDevelopment.png';

function uploadBadge3(){
  charterContext3.drawImage(devEmbroBadge, 0, 0, 30, 59);
}

function deleteBadge3(){
  charterContext3.clearRect(1, 1, 600, 300);
}

var badgeLocation3 = document.getElementById("c3");
var badgeLocationContext3 = badgeLocation3.getContext("2d");

function charterLocation3(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation3.style.top = "97px";
        badgeLocation3.style.left = "127px";
        badgeLocation3.style.position = "absolute";
        break;

      case "left":
        badgeLocation3.style.top = "97px";
        badgeLocation3.style.left = "215px";
        badgeLocation3.style.position = "absolute";
        break;

      case "center":
        badgeLocation3.style.top = "103px";
        badgeLocation3.style.left = "173px";
        badgeLocation3.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation3.style.top = "108px";
        badgeLocation3.style.left = "80px";
        badgeLocation3.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation3.style.top = "108px";
        badgeLocation3.style.left = "269px";
        badgeLocation3.style.position = "absolute";
        break;
    }
}


//FA CHARTER STANDARD PRINTED BADGE

var charterCanvas4 = document.getElementById("c4");
var charterContext4 = charterCanvas4.getContext("2d");

var stdPrintedBadge = new Image();
  stdPrintedBadge.src = 'images/60x30img.png';

function uploadBadge4(){
  charterContext4.drawImage(stdPrintedBadge, 0, 0, 60, 30);
}

function deleteBadge4(){
  charterContext4.clearRect(1, 1, 600, 300);
}

var badgeLocation4 = document.getElementById("c4");
var badgeLocationContext4 = badgeLocation4.getContext("2d");

function charterLocation4(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation4.style.width = "70px";
        badgeLocation4.style.height = "80px";
        badgeLocation4.style.top = "110px";
        badgeLocation4.style.left = "115px";
        badgeLocation4.style.position = "absolute";
        break;

      case "left":
        badgeLocation4.style.width = "70px";
        badgeLocation4.style.height = "80px";
        badgeLocation4.style.top = "110px";
        badgeLocation4.style.left = "200px";
        badgeLocation4.style.position = "absolute";
        break;

      case "center":
        badgeLocation4.style.width = "70px";
        badgeLocation4.style.height = "80px";
        badgeLocation4.style.top = "110px";
        badgeLocation4.style.left = "165px";
        badgeLocation4.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation4.style.width = "50px";
        badgeLocation4.style.height = "60px";
        badgeLocation4.style.top = "130px";
        badgeLocation4.style.left = "80px";
        badgeLocation4.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation4.style.width = "50px";
        badgeLocation4.style.height = "60px"; 
        badgeLocation4.style.top = "130px";
        badgeLocation4.style.left = "265px";
        badgeLocation4.style.position = "absolute";
        break;
    }
}

//FA CHARTER SCOTTISH BADGE

var charterCanvas5 = document.getElementById("c5");
var charterContext5 = charterCanvas5.getContext("2d");

var scottishFaPatch = new Image();
  scottishFaPatch.src = 'images/scottish60x30.png';

function uploadBadge5(){
  charterContext5.drawImage(scottishFaPatch, 0, 0, 60, 30);
}

function deleteBadge5(){
  charterContext5.clearRect(1, 1, 600, 300);
}

var badgeLocation5 = document.getElementById("c5");
var badgeLocationContext5 = badgeLocation5.getContext("2d");

function charterLocation5(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation5.style.width = "70px";
        badgeLocation5.style.height = "80px";
        badgeLocation5.style.top = "110px";
        badgeLocation5.style.left = "115px";
        badgeLocation5.style.position = "absolute";
        break;

      case "left":
        badgeLocation5.style.width = "70px";
        badgeLocation5.style.height = "80px";
        badgeLocation5.style.top = "110px";
        badgeLocation5.style.left = "200px";
        badgeLocation5.style.position = "absolute";
        break;

      case "center":
        badgeLocation5.style.width = "70px";
        badgeLocation5.style.height = "80px";
        badgeLocation5.style.top = "110px";
        badgeLocation5.style.left = "165px";
        badgeLocation5.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation5.style.width = "50px";
        badgeLocation5.style.height = "60px";
        badgeLocation5.style.top = "130px";
        badgeLocation5.style.left = "80px";
        badgeLocation5.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation5.style.width = "50px";
        badgeLocation5.style.height = "60px";
        badgeLocation5.style.top = "130px";
        badgeLocation5.style.left = "265px";
        badgeLocation5.style.position = "absolute";
        break;
    }
}

//FA CHARTER WELSH BADGE

var charterCanvas6 = document.getElementById("c6");
var charterContext6 = charterCanvas6.getContext("2d");

var stdWelshFaPatch = new Image();
  stdWelshFaPatch.src = 'images/welsh60x30.png';

function uploadBadge6(){
  charterContext6.drawImage(stdWelshFaPatch, 0, 0, 60, 30);
}

function deleteBadge6(){
  charterContext6.clearRect(1, 1, 600, 300);
}

var badgeLocation6 = document.getElementById("c6");
var badgeLocationContext6 = badgeLocation6.getContext("2d");

function charterLocation6(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation6.style.width = "70px";
        badgeLocation6.style.height = "80px";
        badgeLocation6.style.top = "110px";
        badgeLocation6.style.left = "115px";
        badgeLocation6.style.position = "absolute";
        break;

      case "left":
        badgeLocation6.style.width = "70px";
        badgeLocation6.style.height = "80px";
        badgeLocation6.style.top = "110px";
        badgeLocation6.style.left = "200px";
        badgeLocation6.style.position = "absolute";
        break;

      case "center":
        badgeLocation6.style.width = "70px";
        badgeLocation6.style.height = "80px";
        badgeLocation6.style.top = "110px";
        badgeLocation6.style.left = "165px";
        badgeLocation6.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation6.style.width = "50px";
        badgeLocation6.style.height = "60px";
        badgeLocation6.style.top = "130px";
        badgeLocation6.style.left = "80px";
        badgeLocation6.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation6.style.width = "50px";
        badgeLocation6.style.height = "60px";
        badgeLocation6.style.top = "130px";
        badgeLocation6.style.left = "265px";
        badgeLocation6.style.position = "absolute";
        break;
    }
}

//FA CHARTER IRISH BADGE

var charterCanvas7 = document.getElementById("c7");
var charterContext7 = charterCanvas7.getContext("2d");

var irishFaPatch = new Image();
  irishFaPatch.src = 'images/irish60x30.png';

function uploadBadge7(){
  charterContext7.drawImage(irishFaPatch, 0, 0, 60, 30);
}

function deleteBadge7(){
  charterContext7.clearRect(1, 1, 600, 300);
}

var badgeLocation7 = document.getElementById("c7");
var badgeLocationContext7 = badgeLocation7.getContext("2d");

function charterLocation7(v1){
  switch (v1) {
      // top: 103px; left: 210px
      case "right":
        badgeLocation7.style.width = "70px";
        badgeLocation7.style.height = "80px";
        badgeLocation7.style.top = "110px";
        badgeLocation7.style.left = "115px";
        badgeLocation7.style.position = "absolute";
        break;

      case "left":
        badgeLocation7.style.width = "70px";
        badgeLocation7.style.height = "80px";
        badgeLocation7.style.top = "110px";
        badgeLocation7.style.left = "200px";
        badgeLocation7.style.position = "absolute";
        break;

      case "center":
        badgeLocation7.style.width = "70px";
        badgeLocation7.style.height = "80px";
        badgeLocation7.style.top = "110px";
        badgeLocation7.style.left = "165px";
        badgeLocation7.style.position = "absolute";
        break;

      case "rightarm":
        badgeLocation7.style.width = "50px";
        badgeLocation7.style.height = "60px";
        badgeLocation7.style.top = "130px";
        badgeLocation7.style.left = "80px";
        badgeLocation7.style.position = "absolute";
        break;

      case "leftarm":
        badgeLocation7.style.width = "50px";
        badgeLocation7.style.height = "60px";
        badgeLocation7.style.top = "130px";
        badgeLocation7.style.left = "265px";
        badgeLocation7.style.position = "absolute";
        break;
    }
}