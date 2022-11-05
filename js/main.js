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

    let x = 0;
    let y = 0;    

    for (let i = 0; i < 5; i++) {

        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let radius = 50 * (4 / (n *PI)); // set the radius
        x += radius * cos(n * time); // get the x coordinates in circle now
        y += radius * sin(n * time); // get the y coordinate in circle now    
   
        stroke(255, 100); // set the border as white
        noFill(); // remove fill for circle
        ellipse(prevx, prevy, radius *2); // draw the circle

        fill(255);
        //ellipse(x, y, 5); // small circle at big circle circumference
        stroke(255);
        line (prevx, prevy, x, y); // line start from big circle's centre and end in small circles center
        
    }
    translate(180,0); // move point
    line(x-180, y, 0, wave[0]) // draw the line from small circle to wave starting point
    wave.unshift(y); // collect y coordinate and add it first in array

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
