///////////// EX 1.2 ///////////////

// let ofColor = document.getElementById('casefive');

// ofColor.addEventListener('click', function(event){
//     ofColor.style.backgroundColor = 'green'
//     event.stopPropagation()
// })

// document.addEventListener('click', function(){
//     ofColor.style.backgroundColor = 'bisque'
// })

//////////////////////////////////

///////////// EX 1.3 ///////////////

// let myCase = document.getElementById('casefive');

// myCase.addEventListener('click', function(){
//     myCase.style.backgroundColor = 'red'
//     if (myCase.style.backgroundColor === 'red') {
//         myCase.addEventListener('click', function(){
//             myCase.style.backgroundColor = 'green'
//         })
//     }
// })
//////////////////////////////////

///////////// EX 1.4 ///////////////

let myCase = document.querySelectorAll(".ex1");

const colors = ["red", "green", "blue", "yellow", "orange"];
let colorIndex = 0;

for (let aCase of myCase) {
  aCase.addEventListener("click", function (event) {
    aCase.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    event.stopPropagation();
    document.addEventListener("click", function () {
      aCase.style.backgroundColor = "bisque";
    });
  });
}

//////////////////////////////////

///////////// EX 1.5 ///////////////

// let someCase = document.getElementById('casefive');

// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// let colorIndex = 0;

// someCase.addEventListener('click', function(event){
//    someCase.style.backgroundColor = colors[colorIndex];
//    colorIndex = (colorIndex + 1) % colors.length;
//    event.stopPropagation()
// })
//   document.addEventListener('click', function(){
//     someCase.style.backgroundColor = 'bisque'
//   })

//////////////////////////////////

///////////// EX 2.3 /////////////

let textCase = document.querySelector(".newcase");

textCase.style.visibility = "hidden";

//////////////////////////////////

///////////// EX 2.5 2.6 /////////////

let textBtn = document.getElementById("btn");

let page = document.querySelector("body");

textBtn.addEventListener("click", function (event) {
  textCase.style.visibility = "visible";
  page.style.backgroundColor = "grey";
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (!event.target.matches("#paragraph")) {
    textCase.style.visibility = "hidden";
    page.style.backgroundColor = "white";
  }
});
//////////////////////////////////

///////////// Combinaison gagnante /////////////

let consigne = document.getElementById("consigne");

consigne.style.filter = "blur(50px)";

consigne.addEventListener("mouseenter", function () {
  consigne.style.filter = "blur(0)";
});

consigne.addEventListener("mouseleave", function () {
  consigne.style.filter = "blur(50px)";
});

let hiddenString = document.getElementById("hiddenstring");

hiddenString.style.visibility = "hidden";

document.addEventListener("keydown", function (event) {
  if (event.key === ("e", "r")) {
    hiddenString.style.visibility = "visible";
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === ("e", "r")) {
    hiddenString.style.visibility = "hidden";
  }
});

////////////////////////////////////////////////

////////////////// EXERCISE 3 //////////////////

let zoomExs = document.querySelectorAll("#cas");

for (let zoomEx of zoomExs) {
  zoomEx.addEventListener("mousedown", function () {
    zoomEx.style.width = "400px";
  });

  zoomEx.addEventListener("mouseup", function () {
    zoomEx.style.width = "200px";
  });
}

////////////////////////////////////////////////

////////////////// BONUS ///////////////////////

let carousel = document.getElementById("car")
let showButton = document.getElementById("btn-photo")

carousel.style.visibility = 'hidden'

showButton.addEventListener('click', function(){
  carousel.style.visibility = 'visible'
})

let image = document.getElementById('carousel');
let currentIndex = 0;
const images = ["im1.jpg","im2.jpg", "im3.jpg", "im4.jpg", "im5.jpg"];

image.addEventListener('click', function(event){
if (event.clientX > image.clientWidth / 2) {
  currentIndex = (currentIndex + 1) % images.length;
} else {
  currentIndex = (currentIndex - 1) + images.length % images.length;
}
image.src = images[currentIndex];
})

//////////// BONUS OF BONUSES //////////////////

// let carousel = document.getElementById("car")
// let showButton = document.getElementById("btn-photo")

// carousel.style.visibility = 'hidden'

// showButton.addEventListener('click', function(){
//   carousel.style.visibility = 'visible'
// })

// let images = ["im1.jpg","im2.jpg", "im3.jpg", "im4.jpg", "im5.jpg"];

// let imageNumber = 0;
// let imageLength = images.length - 1;

// function changeImage(x) {
//   imageNumber += x;
//   if (imageNumber > imageLength) {
//     imageNumber = 0;
//   }
//   if (imageNumber < 0) {
//     imageNumber = imageLength;
//   }

//   document.getElementById("carousel").src = images[imageNumber];

//   return false;
// }

// function autoRun() {
//   setInterval('changeImage(1)', 7000)
// }

////////////////////////////////////////////////