const PLAY = 1;
const END = 0;
var gameState = PLAY;
var background_img;
var backgr;
var astronaut_Flying_img;
var astronaut_Flying;
var asteroids_img
var asteroidGroup;
var gameEndSound;

function preload() 
{
    background_img = loadImage("assets/images/space-background.png");
    astronaut_Flying_img = loadImage("assets/images/astronaut3.png");
    asteroids_img = loadImage("assets/images/asteroids.png");

    gameEndSound = loadSound("assets/sound/destroySound.mp3");
}

function setup()
{
    var canvas = createCanvas(1200,1200);

   //adding background and giving velocity
    asteroidGroup = new Group();


    backgr = createSprite(0,0,1200,1200);
    backgr.addImage(background_img);
    backgr.y=backgr.height/2;
    backgr.velocityY = 4;
    backgr.scale = 4;

    //Flying astronaut
    astronautFlying =  createSprite(600,600,20,20);
    astronautFlying.addImage(astronaut_Flying_img);

    //Creating asteroids
    
    
    

    
}

function draw(){
    //background(0);
    if(gameState === PLAY)
    {
        asteroids();
        
        if (backgr.y > 400) 
        {
            backgr.y = backgr.height/2;
        }

        //if asteroids hit astronaut
        if(asteroidGroup.isTouching(astronautFlying))
        {
            gameState = END;
            gameEndSound.play();
        }
    }
    else if(gameState === END){
        
        backgr.velocityY = 0;
        asteroidGroup.destroyEach();
        asteroidGroup.setVelocityYEach(0);
        asteroidGroup.setLifetimeEach(-1);
    }
    

    drawSprites();
}

function asteroids(){
    console.log(World.frameCount);
    if(World.frameCount % 60 === 0){
        asteroid = createSprite(random(100,800),0,40,40);
        asteroid.addImage(asteroids_img);
        asteroid.velocityY = 5;
        asteroid.lifetime = 240;
        asteroidGroup.add(asteroid);
        
    }
}

