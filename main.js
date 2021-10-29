NoseX=0;
NoseY=0;
NusX=0;
NusY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/ZRXkDTYh/download-9.jpg');
mus_nus=loadImage('https://i.postimg.cc/mDmCYDHZ/13-130700-transparent-background-mustache-clip-art-transparent-hd-png.jpg');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
//image(clown_nose,NoseX,NoseY,15,15);
image(mus_nus,NusX,NusY,15,15);

}
function take_snapshot(){
save('your filter image.jpg');
}
function modelLoaded(){
console.log("pose net is initialised")
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
NoseX=results[0].pose.nose.x-5;
NoseY=results[0].pose.nose.y-5;
console.log("nose x="+NoseX);
console.log("nose y="+NoseY);
NusX=results[0].pose.nose.x+15;
NusY=results[0].pose.nose.y+15;
console.log("nus x="+NusX);
console.log("nus y="+NusY);
}
}