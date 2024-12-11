let posSnakeX =0;
let posSnakeY =0;

let velocitaX = 1;
let velocitaY = 1;

let direzioneX = 1;
let direzioneY = 0;

let posMelaX = 20;
let posMelaY = 20;

let latoSnake = 1;


function setup(){
    createCanvas(400,400);
    frameRate(5);
    scale(10);
}

function draw(){
    background(200,200,255);
    /*qui definiamo lo snake*/
    scale(10);
    posSnakeX = posSnakeX + velocitaX * direzioneX;
    posSnakeY = posSnakeY + velocitaY * direzioneY;
    square(posSnakeX,posSnakeY,latoSnake)
}

function keyPressed(){
    switch (keyCode) {
        case UP_ARROW:
            direzioneX = 0;
            direzioneY = -1;
            break;
        case DOWN_ARROW:
            direzioneX = 0;
            direzioneY = 1;
            break;
        case RIGHT_ARROW:
            direzioneX = 1;
            direzioneY = 0;
            break;
        case LEFT_ARROW:
            direzioneX = -1;
            direzioneY = 0;
            break;
                


        default:
            break;
    }


}