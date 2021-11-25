function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on("pose",gotposes);
}

function draw() {
    background("#969A97");
}

function modalloaded() {
    console.log("modal loaded");
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
    }
}