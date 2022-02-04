var song_1="";
var song_2="";
function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.position(350,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,600,500);
}