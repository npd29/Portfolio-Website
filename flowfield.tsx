import 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js';
import './constants.js';
import './utilities.js';
import './particle.js';

export default function flowfield() {
    function setup() {
        pixelDensity(1);
        var width = window.outerWidth;
        var height = window.outerHeight;
        createCanvas(width, height);
        cols = floor(width / scl);
        rows = floor(height / scl);

        flowfield = new Array(cols * rows);
        particles = [];
        for (var x = 0; x < numParticles; x++) {
            particles.push(new Particle());
        }

        setInterval(getFramerate, 500);
        setInterval(loopZ, 30000); // bounce every 30 seconds

        isSetup = true;
    }

    function draw() {
        if (inView && !stopAnimation) {
            if (particleMode) {
                background('#222');
                noiseDetail(4);
            } else {
                noiseDetail(1);
            }

            var yoff = 0;
            for (var y = 0; y <= rows; y++) {
                var xoff = 0;
                for (var x = 0; x <= cols; x++) {
                    var index = x + y * cols;
                    var angle = noise(xoff, yoff, zoff) * TWO_PI * 1.5;
                    var v = p5.Vector.fromAngle(angle);
                    if (!particleMode) {
                        v.setMag(5);
                    } else {
                        v.setMag(0.2);
                    }

                    flowfield[index] = v;
                    xoff += inc;
                    stroke(255, 0.1);
                }
                yoff += inc;

                zoff += z * 0.000005;
            }

            if (!particleMode) {
                for (var i = 0; i < particles.length; i++) {
                    particles[i].follow(flowfield);
                    particles[i].update();
                    particles[i].edges();
                    particles[i].show();
                }
            } else {
                for (var i = 0; i < particles.length; i++) {
                    particles[i].follow(flowfield);
                    particles[i].update();
                    particles[i].edges();
                    particles[i].showParticle();
                }
            }
        }
    }
    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        window.onresize = setup;
    }
}
