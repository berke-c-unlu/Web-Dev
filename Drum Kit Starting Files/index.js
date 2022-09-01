
/* Click Events */

var drumButtons = document.querySelectorAll(".drum");

var numberOfDrumButtons = drumButtons.length;

let i = 0;
for(let i = 0; i < numberOfDrumButtons ; i++){
  drumButtons[i].addEventListener("click", function () {

      var buttonName = this.innerHTML;

      makeSound(buttonName);

      buttonAnimation(buttonName);
  });
}

/* Keyboard Events */

document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);
});


/* Switch function that creates sound w.r.t keyboard press or click */
function makeSound(currentKey) {
    switch(currentKey){
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
        console.log(currentKey);
    }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  // Set animation to the button.
  activeButton.classList.add("pressed");

  /* After 100ms animation disappear. */
  setTimeout( function () {
    activeButton.classList.remove("pressed");
  },
  100)
}
