// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time = 0;
let wave = []; // y coordinates of wave
wave.push([])

let radius = [100]; // set the radius
let f0 = [2]; // frequency
var leftBuffer;
var rightBuffer;

function setup() {
    // create canvas
  createCanvas(800, 1000);
  leftBuffer = createGraphics(800, 500);
  rightBuffer = createGraphics(800, 500);
}

// loop function of p5.js
function draw() {

    let x = 0;
    let y = 0;

    leftBuffer.background(0); // set background color of canvas as black
    leftBuffer.translate(200, 200); // bring the drawing poit to this coordinate

        leftBuffer.stroke(255); // set the border as white
        leftBuffer.noFill(); // remove fill for circle
        leftBuffer.ellipse(0, 0, radius[0] *2); // draw the circle

    x = radius[0] * cos(2 * time * f0[0] ); // get the x coordinates in circle now
    y = radius[0] * sin(2 * time * f0[0] ); // get the y coordinate in circle now

    wave[0].unshift(y); // collect y coordinate and add it first in array

    leftBuffer.fill(255);
    leftBuffer.ellipse(x, y, 8); // small circle at big circle circumference

    leftBuffer.line(0, 0, x, y); // line start from big circle's centre and end in small circles center
    
    leftBuffer.translate(180,0); // move point
    leftBuffer.line(x-180, y, 0, wave[0][0]) // draw the line from small circle to wave starting point
    leftBuffer.beginShape();
    leftBuffer.noFill();

    for (let i = 0; i < wave[0].length; i++) {
        leftBuffer.vertex(i, wave[0][i]); // draw curve
    }

    leftBuffer.endShape();

    if (wave[0].length > 350) {
        wave[0].pop(); // remove last value from array
    }

    rightBuffer.background(255, 100, 255);
 
    image(leftBuffer, 0, 0);
    image(rightBuffer, 0, 500);

     time += 0.01; // increase the time

}
