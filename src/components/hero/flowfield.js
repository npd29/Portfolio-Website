import { Particle } from './particle';
// import {
//     createCanvas,
//     noiseDetail,
//     background,
//     Vector,
//     noise,
//     stroke,
//     getFramerate,
//     loopZ
// } from 'p5';
import {
    cols,
    rows,
    scl,
    flowfield,
    particles,
    numParticles,
    isSetup,
    particleMode,
    stopAnimation,
    inView,
    inc,
    z,
    width,
    height
} from './constants';

export function flow(p5) {
    let zoff = 0;
    let cols = Math.floor(width / scl);
    let rows = Math.floor(height / scl);
    let flowfield = new Array(cols * rows);

    p5.setup = () => {
        p5.createCanvas(width, height, p5.WEBGL);

        let particles = [];
        for (var x = 0; x < numParticles; x++) {
            particles.push(new Particle(p5));
        }

        setInterval(p5.getFramerate, 500);
        setInterval(p5.loopZ, 30000); // bounce every 30 seconds

        // isSetup = true;
    };

    p5.draw = () => {
        if (true) {
            if (particleMode) {
                p5.background('#222');
                p5.noiseDetail(4);
            } else {
                p5.noiseDetail(1);
            }

            var yoff = 0;
            for (var y = 0; y <= rows; y++) {
                var xoff = 0;
                for (var x = 0; x <= cols; x++) {
                    var index = x + y * cols;
                    var angle = p5.noise(xoff, yoff, zoff) * Math.TWO_PI * 1.5;
                    var v = p5.constructor.Vector.fromAngle(angle);
                    if (!particleMode) {
                        v.setMag(5);
                    } else {
                        v.setMag(0.2);
                    }

                    flowfield[index] = v;
                    xoff += inc;
                    p5.stroke(255, 0.1);
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
    };
    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        window.onresize = p5.setup;
    }
}
