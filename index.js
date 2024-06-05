

//selectis all the drum classes that contain the letter icons
var numberOfButtons = document.querySelectorAll(".drum").length;

//this for loops goes through the array and adds an eventlistner that monitors a click
for(var i = 0; i < numberOfButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML =  this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });
}

//this adds an event listener to a keypress and sends the event to a function makeSound
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

//this function uses a switch statement to compare key to all the differents cases: w a s d j k l 
function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
                
        case "d":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "k":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        default:  console.log("Helllo");
         }

}
//this function will provide an animation when the button is pressed and clicked (flash on/off)
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100 );
}