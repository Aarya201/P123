
leftWristX="";
rightWristY="";
difference="0";

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('Posenet is initialized');
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }

}
function draw() {
        background('#fffff');

        document.getElementById("square_side").innerHTML = "Text Size Will Be = " + difference +"px";
        document.getElementById("etc").style.fontSize=difference;
}