// alert("Hello World!");


// for (var i = 0; document.querySelectorAll(".drum").length ; i++ ) {

//   document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

   // console.log(this.innerHTML)

//    if (this.innerHTML==="w") {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//    }


//   } );
// }

// document.querySelector("button").addEventListener("click", handleClick);
for (var i = 0 ; 1 < document.querySelectorAll("button").length ; i++){

  document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}

function handleClick(){
  // var audio = new Audio ('sounds/crash.mp3')
  // audio.play();
  // console.log(this.innerHTML);

  var buttonInnerHTML = this.innerHTML; // w a s d j k l

  switch (buttonInnerHTML){
    case 'w' :
      var audio = new Audio ('sounds/tom-1.mp3')
      audio.play();
      break;
    case 'a':
      var audio = new Audio ('sounds/tom-2.mp3')
      audio.play();
      break;
    case 's' :
      var audio = new Audio ('sounds/tom-3.mp3')
      audio.play();
      break;
    case 'd' :
      var audio = new Audio ('sounds/tom-4.mp3')
      audio.play();
      break;
    case 'j' :
      var audio = new Audio ('sounds/crash.mp3')
      audio.play();
      break; 
    case 'k' :
      var audio = new Audio ('sounds/kick-bass.mp3')
      audio.play();
      break;
    case 'l' :
      var audio = new Audio ('sounds/snare.mp3')
      audio.play();
      break;  
  }
}

// แบบที่ 1
// document.querySelector("button").addEventListener("click ", function(){
//   alert("ฉันถูกกด");
// });


// แบบที่ 2
// document.querySelector("button").addEventListener("click ", () => alert("ฉันถูกกด"));


// การเขียนใน HTML
  // document.addEventListener("keydown", e => {
  //   if (e.key.toLowerCase() === "w") {
  //     var audio = new Audio ('sounds/tom-1.mp3')
  //     audio.play();
  //   }
  //   if (e.key.toLowerCase() === "a") {
  //     var audio = new Audio ('sounds/tom-2.mp3')
  //     audio.play();
  //   }
  //   if (e.key.toLowerCase() === "s") {
  //     var audio = new Audio ('sounds/tom-3.mp3')
  //     audio.play();
  //   }
  //   if (e.key.toLowerCase() === "d") {
  //     var audio = new Audio ('sounds/tom-4.mp3')
  //     audio.play();
  //   }
  //   if (e.key.toLowerCase() === "j") {
  //     var audio = new Audio ('sounds/crash.mp3')
  //     audio.play();
  //   }
  //   if (e.key.toLowerCase() === "") {
  //     var audio = new Audio ('sounds/kick-bass.mp3')
  //     audio.play();
  //   }
  //   if (e.key.toLowerCase() === "l") {
  //     var audio = new Audio ('sounds/snare.mp3')
  //     audio.play();
  //   }
  // })

// การเขียนใน JavaScript (มันเขียนแบบนี้เหรอว่ะ?)
// document.addEventListener("keydown", (event) => {
//   var audio = this.innerHTML;
//   switch (event.key.toLowerCase()) {
//     case 'w' :
//       var audio = new Audio ('sounds/tom-1.mp3')
//       audio.play();
//       break;
//     case 'a':
//       var audio = new Audio ('sounds/tom-2.mp3')
//       audio.play();
//       break;
//     case 's' :
//       var audio = new Audio ('sounds/tom-3.mp3')
//       audio.play();
//       break;
//     case 'd' :
//       var audio = new Audio ('sounds/tom-4.mp3')
//       audio.play();
//       break;
//     case 'j' :
//       var audio = new Audio ('sounds/crash.mp3')
//       audio.play();
//       break; 
//     case 'k' :
//       var audio = new Audio ('sounds/kick-bass.mp3')
//       audio.play();
//       break;
//     case 'l' :
//       var audio = new Audio ('sounds/snare.mp3')
//       audio.play();
//       break;
//   }
// });






