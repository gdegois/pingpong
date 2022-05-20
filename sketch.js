function setup() {
  createCanvas(600, 400);
}

  let xbolinha=300
  let ybolinha=200
  let velxbolinha=6
  let velybolinha=6

function draw() {
  background(0);
  circle(xbolinha,ybolinha,20)
  xbolinha=xbolinha+velxbolinha
  ybolinha=ybolinha+velybolinha
}
