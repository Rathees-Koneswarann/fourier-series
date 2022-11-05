// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(0);
    translate(200,200);
    let radius = 50;

    stroke(255);
    noFill();

    ellipse(0, 0, radius *2);
    
    time += 0.001;

}
