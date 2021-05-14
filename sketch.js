const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var drops=[]
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
boy=new Boy(200,700,100,200)
for(var i=0;i<100;i++){
    drops.push(new Drop (random(0,400),random(0,400),5))
}


    

}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i=0;i<drops.length;i++){
        drops [i].display ()
        drops[i].update()
    }
  boy.display()  
}
