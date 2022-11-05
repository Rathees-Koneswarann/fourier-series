// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time = 0;
let wave = []; // y coordinates of wave


function setup() {
    // create canvas
  createCanvas(800, 400);
}

// loop function of p5.js
function draw() {
    
    background(0); // set background color of canvas as black
    translate(200, 200); // bring the drawing poit to this coordinate

    let radius = 50 * (4 / (1 *PI)); // set the radius

    stroke(255); // set the border as white
    noFill(); // remove fill for circle
    ellipse(0, 0, radius *2); // drw the circle

    let x = radius * cos(1 * time); // get the x coordinates in circle now
    let y = radius * sin(1 * time); // get the y coordinate in circle now

    wave.unshift(y); // collect y coordinate and add it first in array

    fill(255);
    ellipse(x, y, 8); // small circle at big circle circumference

    line (0, 0, x, y); // line start from big circle's centre and end in small circles center
    
    translate(180,0); // move point
    line(x-180, y, 0, wave[0]) // draw the line from small circle to wave starting point
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]); // draw curve
    }
    endShape();

    if (wave.length > 350) {
        wave.pop(); // remove last value from array
    }
    
    time += 0.05; // increase the time

}
