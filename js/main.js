var leftBuffer;
var rightBuffer;
var Buffer = [];


function setup() {
    // 800 x 400 (double width to make room for each "sub-canvas")
    createCanvas(800, 400);
    // Create both of your off-screen graphics buffers
    Buffer[0] = createGraphics(400, 400);
    rightBuffer = createGraphics(400, 400);
}


function drawLeftBuffer(buffer) {
    buffer.background(0, 0, 0);
    buffer.fill(255, 255, 255);
    buffer.textSize(32);
    buffer.text("This is the left buffer!", 50, 50);
}

function draw() {
    // Draw on your buffers however you like
    drawLeftBuffer(Buffer[0]);
    drawLeftBuffer(rightBuffer);
    // Paint the off-screen buffers onto the main canvas
    image(leftBuffer, 0, 0);
    image(rightBuffer, 400, 0);
}



