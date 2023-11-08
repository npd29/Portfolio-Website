var inc = 0.1;
var scl = 20;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var smoothingRadius = 10;

var width = window.innerWidth;
var height = window.innerHeight;
var flowfield;

function setup() {
  noiseDetail(12);
  // set canvas size to window size
  createCanvas(window.innerWidth, window.innerHeight);
  // createCanvas(width, height);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  flowfield = new Array(cols * rows);
  densityArray = new Array(
    floor(width / smoothingRadius) * floor(height / smoothingRadius)
  );

  for (var x = 0; x < width; x += scl) {
    for (var y = 0; y < height; y += scl) {
      particles.push(new Particle(x, y));
    }
  }

  background(255, 255, 255, 0);
}

function draw() {
  background("#222");
  var yoff = 0;
  for (var y = 0; y <= rows; y++) {
    var xoff = 0;
    for (var x = 0; x <= cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(5);
      flowfield[index] = v;
      xoff += inc;
      stroke(200, 200, 255, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}
