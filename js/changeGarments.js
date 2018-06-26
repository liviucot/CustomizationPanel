var imgs = [
// arrays index start at 0
[],

/*front and back first t-shirt Blue*/
["images/front.png", "images/back.png"],

/*front and back second t-shirt*/
["images/front2.png", "images/back2.png"],

/*front and back third t-shirt*/
["images/front3.png", "images/back3.png"],

/*front and back fourth t-shirt*/
["images/front4.png", "images/back4.png"]
];

function showImg(imgIndex) {
  document.getElementById('tshirtFacing').src = imgs[imgIndex][0];
  document.getElementById('tshirtBack').src = imgs[imgIndex][1];
}