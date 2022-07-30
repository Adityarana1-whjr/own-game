var cannonImg, cannon; 
var backgroundImg;
var obstacle1,obstacle1Img,obstacle2,obstacle2Img;
var obstacle1Group, obstacle2Group;
var bullet, bulletImg, bulletGroup;

function preload() {
    cannonImg=loadImage("images/cannon.png")
    backgroundImg=loadImage("images/background.png")
    obstacle1Img=loadImage("images/ball_1.png")
    obstacle2Img=loadImage("images/ball_2.png")
    bullet=loadImage("images/bullet.png")
}



function setup(){
    createCanvas(1000,800);
    cannon=createSprite(500,720,50,50)
    cannon.addImage("cannon",cannonImg)
    cannon.scale=0.3;

    obstacle1Group=new Group()
    obstacle2Group=new Group()

}

function draw() {

    background(backgroundImg);
    drawSprites();
    obstacle1ball();
    obstacle2ball();

    if(keyDown("A") || keyDown(LEFT_ARROW)){
        cannon.x=cannon.x-5

    }
 
    if(cannon.x<0){
        cannon.x=950
  
    }

    if(keyDown("D") || keyDown(RIGHT_ARROW)){
        cannon.x=cannon.x+5

    }

    if(cannon.x>1000){
        cannon.x=10
  
    }

}

function obstacle1ball(){
    if(frameCount%150===0){
        obstacle1=createSprite(50,50,50,50)
        obstacle1.addImage("obstacle1",obstacle1Img)
        obstacle1.scale=0.2
        obstacle1.velocityY=4
        obstacle1.x=Math.round(random(100,800))
        obstacle1Group.add(obstacle1)


    }
    
}

function obstacle2ball(){
    if(frameCount%400===0){
        obstacle2=createSprite(50,50,50,50)
        obstacle2.addImage("obstacle2",obstacle2Img)
        obstacle2.scale=0.4
        obstacle2.velocityY=5
        obstacle2.x=Math.round(random(100,800))
        obstacle2Group.add(obstacle2)
    }
    
}
