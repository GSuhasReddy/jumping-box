var canvas;
var music;
var surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = new Surface();   
    surface2 = new Surface();
    surface3 = new Surface();
    surface4 = new Surface();
    //create box sprite and give velocity
    createSprite(random(20,750))
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites ();


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
    }
    fill("blue");
    surface1.display();
    fill("yellow");
    surface2.display();
    fill("pink");
    surface.display();
    fill("green");
    surface.display();

}
