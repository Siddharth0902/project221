var box1,box2,box3,box4;
var square;
var surface1,surface2,surface3;
var canvas;
var music;

function preload()
{
    music = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(80,590,190,30);
    box1.shapeColor = "blue";
    box2 = createSprite(290,590,190,30);
    box2.shapeColor = "yellow";
    box3 = createSprite(510,590,190,30);
    box3.shapeColor = "purple";
    box4 = createSprite(720,590,190,30);
    box4.shapeColor = "green";

    //create box sprite and give velocity
    square = createSprite(random(20,750),20,20);
    square.velocityX = 4;
    square.velocityY = 4;

    surface1 = createSprite(10,280,20,580);
    surface1.visible=false;
    surface2 = createSprite(400,10,800,20);
    surface2.visible=false;
    surface3 = createSprite(790,280,20,580);
    surface3.visible=false;

}

function draw() 
{
    background(rgb(169,169,169));
    //create edgeSprite
    square.bounceOff(surface1);
    square.bounceOff(surface2);
    square.bounceOff(surface3);


    //add condition to check if box touching surface and make it box
    if(box1.isTouching(square) && square.bounceOff(box1))
    {
      square.shapeColor = "blue";
    }
    if(box2.isTouching(square) && square.bounceOff(box2))
    {
      square.shapeColor = "yellow";
    }
    if(box3.isTouching(square) && square.bounceOff(box3))
    {
      square.shapeColor = "purple";
    }
    if(box4.isTouching(square) && square.bounceOff(box4))
    {
      square.shapeColor = "green";
    }
   
    drawSprites();
}
