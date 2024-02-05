import { P5CanvasInstance } from 'react-p5-wrapper';
import './constants';
import { height, numParticles, scl, width } from './constants';
import { Particle } from './particle';
import { Vector } from 'p5';

const particleMode = false;
var particles: Particle[] = [];
let z = 1;
export var cols: number;
export var rows: number;

export function loopZ() {
    if (!particleMode) {
        z *= -1;
    }
}

// function getFramerate(p5: P5CanvasInstance) {
//     document.getElementById('fr')!.innerHTML =
//         Math.floor(p5.frameRate()) +
//         ' fps /  ' +
//         particles.length +
//         ' particles';
// }

export function flowfield(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);

    cols = Math.floor(width / scl);
    rows = Math.floor(height / scl);

    const flowfield = new Array(cols * rows);
    for (var x = 0; x < numParticles; x++) {
        particles.push(new Particle(p5));
    }
    draw(p5);

    // setInterval(getFramerate, 500);
    // setInterval(loopZ, 30000); // bounce every 30 seconds

    function draw(p5: P5CanvasInstance) {
        var zoff = 0;
        var inc = 0.1;

        if (particleMode) {
            p5.background('#222');
            p5.noiseDetail(4, 0.75);
        } else {
            p5.noiseDetail(1, 1);
        }

        var yoff = 0;
        for (var y = 0; y <= rows; y++) {
            var xoff = 0;
            for (var x = 0; x <= cols; x++) {
                var index = x + y * cols;
                var angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI * 1.5;
                var v = Vector.fromAngle(angle);
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
        var i;
        if (!particleMode) {
            for (i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                particles[i].show();
            }
        } else {
            for (i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                particles[i].showParticle();
            }
        }
    }
    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        window.onresize = function () {
            p5.resizeCanvas(width, height);
        };
    }
}
