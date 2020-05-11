var seconds = 0;
scrollBool = false;
var clickSound = new Audio()
// // // // // // // // // // // // // // // // // // //
console.log("SOUND ALTER ON PASS LINE, EACH -> 30 sec <-");
function goScript(){
    soundPicker();
    secondsFunc();    
}
function secondsFunc(){
    seconds += 1;
    checkSec();
    console.log("-> " + seconds + " <-"); 
}
var timeInt = setInterval(secondsFunc, 1000);
function checkSec() {
    switch (seconds) {
        case 1: console.log("PASS LINE <START>")
            pickOne = true;
            clickSound = new Audio("wavs/click4.wav")
        break;
        case 32:
             console.log("PASS LINE 32")
                clickSound = new Audio("wavs/click2.wav")    
            break;
        case 64: 
        console.log("PASS LINE 64")
                clickSound = new Audio("wavs/click3.wav")   
            break;
        case 96:
             console.log("PASS LINE 96")
                clickSound = new Audio("wavs/click4.wav")  
            break;
        case 128: 
        console.log("PASS LINE 128")
                  seconds = 0;
            break;
    }   
}
$('body').click(function clickPlay(){
    console.log('clicked');
    clickSound.play();
  });

