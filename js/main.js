// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time = 0;
let wave = []; // y coordinates of wave


function setup() {
    // create canvas
  createCanvas(600, 400);
}

// loop function of p5.js
function draw() {
    
    background(0); // set background color of canvas as black
    translate(200, 200); // bring the drawing poit to this coordinate

    let radius = 50; // set the radius

    stroke(255); // set the border as white
    noFill(); // remove fill for circle
    ellipse(0, 0, radius *2); // drw the circle

    let x = radius * cos(time); // get the x coordinates in circle now
    let y = radius * sin(time); // get the y coordinate in circle now

    wave.push(y); // collect y coordinates

    fill(255);
    ellipse(x, y, 8); // small circle at big circle circumference

    line (0, 0, x, y); // line start from big circle's centre and end in small circles center
    
    translate(180,0); // move point
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]); // draw curve
    }
    endShape();
    
    time += 0.1; // increase the time

}
