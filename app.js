var Uscore = 0;
var highscore = 10;
var press = function () {
	Uscore++;
	document.getElementById('score').innerHTML = "Your score: " + Uscore;
	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;	
	}
};