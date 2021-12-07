buttobomma = "";
enjoy_enjaami = "";
govyachya_kinaryav = "";
nesha = "";
oporadhi = "";
rahet_fateh_ali_khan = "";
ramuloo_ramulaa = "";
rowdy_baby = "";
vaaste = "";
zingaat = "";
function preload(){
    song = loadSound("buttabomma.mp3");
    song = loadSound("enjoy_enjaami.mp3");
    song = loadSound("govyachya_kinaryav.mp3");
    song = loadSound("nesha.mp3");
    song = loadSound("oporadhi.mp3");
    song = loadSound("ramuloo_ramulaa.mp3");
    song = loadSound("rowdy_baby.mp3");
    song = loadSound("vaaste.mp3");
    song = loadSound("zaroori_tha.mp3");
    song = loadSound("zingaat.mp3");

}
function draw(){
    image(video,0,0,600,500);
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}