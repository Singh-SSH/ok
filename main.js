song = "";

function preload()
{
	song = loadSound("DJ KSHMR, Jeremy Oceans - One More Round (Free Fire Booyah Day Theme Song) Garena Free Fire.mp3");
}
function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}
function play()
{
	song.play();
}