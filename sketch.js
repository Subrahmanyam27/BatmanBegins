const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame=0;
var thun;

function preload(){
    thun1 = loadImage("1.png");
    thun2 = loadImage("2.png");
    thun3 = loadImage("3.png");
    thun4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    
    umberella = new Umbrella(150,500);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }

}

function draw(){
    background(0);
    Engine.update(engine);

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        var thun = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thun.addImage(thun1);
            break;
            case 2: thun.addImage(thun2);
            break; 
            case 3: thun.addImage(thun3);
            break;
            case 4: thun.addImage(thun4);
            break;
            default: break;
        }
        thun.scale = random(0.6,1)
    }

    if(thunderCreatedFrame + 10 === frameCount && thun){
        thun.destroy();
    }

    umberella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
    }

    drawSprites();
}
