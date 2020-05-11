// var audio = new Audio('wavs/111.wav');
var audio = document.getElementById("player");
audio.addEventListener('ended', function() {
	audio.src = "wavs/222.wav";
	player.play();
});
function audioPlay(){
	if (!scrollBool) {
		player.pause();
		return;
	  }
		player.play();
	}
	