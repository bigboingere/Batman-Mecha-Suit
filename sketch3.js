let Batman;
function preload(){
    Batman = loadModel('Mech Suit - Batman.obj',true)
}
function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL)
}
function draw(){
    background(200)
    scale(2)
    rotateX(millis() / 10000)
    rotateY(millis() / 10000)
    rotateZ(millis() / 10000)
    normalMaterial()//for colors
    model(Batman)
}
function windowResized() {
    resizeCanvas(windowWidth,windowHeight)
}
