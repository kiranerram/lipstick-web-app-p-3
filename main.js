lipstick_X=0;
lipstick_Y=0;


function preload()
{
  lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
   console.log('PoseNet Is Initialized'); 
}

function gotPoses(results) 
{
  if (results.length > 0)
  {
    console.log(results);
    lipstick_X =  results[0].pose.nose.x-17;
    lipstick_Y =  results[0].pose.nose.y+15;
  }
    
}

function draw()
{
 image(video, 0, 0, 300, 300);
 image(lipstick, lipstick_X, lipstick_Y, 30, 30);
}


function take_snapshot()
{
    save('myFilterImage.png');
}