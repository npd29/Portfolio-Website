import { Particle } from './particle';

import {
    scl,
    numParticles,
    particleMode,
    inc,
    z,
    width,
    height
} from './constants';

export function flow(p5) {
    let cols = Math.floor(width / scl);
    console.log(cols);
    let rows = Math.floor(height / scl);
    console.log(rows);
    let flowfield = new Array(cols * rows);
    let particles = [];

    // setInterval(p5.getFramerate, 500);
    // setInterval(p5.loopZ, 30000); // bounce every 30 seconds
    for (var x = 0; x < numParticles; x++) {
        particles.push(new Particle(p5));
    }
    var zoff = 0;

    p5.setup = () => {
        p5.createCanvas(width, height);
        p5.pixelDensity(1);
        // isSetup = true;
    };

    p5.draw = () => {
        if (!particleMode) {
            p5.noiseDetail(4);
            // p5.background('#222');
        } else {
            p5.background('#222');
            p5.noiseDetail(1);
        }
        var xoff = 0;
        // var zoff = 0;
        var yoff = 0;
        for (var y = 0; y < rows; y++) {
            xoff = 0;
            for (var x = 0; x < cols; x++) {
                var index = x + y * cols;
                // if (x === 1 && y === 1) {
                //     console.log(xoff, yoff, zoff);
                //     // console.log(p5.noise(xoff, yoff, zoff));
                // }
                var angle = p5.noise(xoff, yoff, zoff) * Math.PI * 2 * 1.5;
                var v = p5.constructor.Vector.fromAngle(angle);
                if (!particleMode) {
                    v.setMag(10);
                } else {
                    v.setMag(0.2);
                }
                flowfield[index] = v;
                xoff += inc;
            }
            yoff += inc;
            zoff += z * 0.000005;
            if (x === 1 && y === 1) {
                console.log(xoff, yoff, zoff);
                // console.log(p5.noise(xoff, yoff, zoff));
            }
            // console.log(zoff);
        }
        // p5.stroke(0, 0, 255, 255);

        if (!particleMode) {
            for (var i = 0; i < particles.length; i++) {
                // p5.push();
                // p5.translate(particles[i].pos.x, particles[i].pos.y);

                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                particles[i].show();
                // p5.pop();
            }
        } else {
            for (var i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                particles[i].showParticle();
            }
        }
        // if (true) {
        //     if (!particleMode) {
        //         p5.background('#222');
        //         p5.noiseDetail(4);
        //     } else {
        //         p5.background('#222');

        //         p5.noiseDetail(1);
        //     }
        //     let zoff = 0;

        //     var yoff = 0;
        //     for (var y = 0; y <= rows; y++) {
        //         var xoff = 0;
        //         for (var x = 0; x <= cols; x++) {
        //             var index = x + y * cols;
        //             // console.log(p5.noise(xoff, yoff, zoff));
        //             var angle = p5.noise(xoff, yoff, zoff) * Math.PI * 2 * 1.5;
        //             // var angle = p5.noise(xoff, yoff) * Math.PI * 2;
        //             // console.log(angle);
        //             var v = p5.constructor.Vector.fromAngle(angle);
        //             // console.log(v);
        //             if (!particleMode) {
        //                 v.setMag(0.1);
        //             } else {
        //                 v.setMag(0.2);
        //             }
        //             p5.stroke(0);
        //             p5.push();
        //             p5.translate(x * scl, y * scl);
        //             p5.rotate(v.heading());
        //             p5.line(0, 0, scl, 0);
        //             p5.pop();
        //             flowfield[index] = v;
        //             xoff += inc;
        //             // p5.stroke(255, 0.1);
        //         }
        //         yoff += inc;

        //         zoff += z * 0.00005;
        //     }

        //     if (!particleMode) {
        //         for (var i = 0; i < particles.length; i++) {
        //             particles[i].follow(flowfield);
        //             particles[i].update();
        //             particles[i].edges();
        //             particles[i].show();
        //         }
        //     } else {
        //         for (var i = 0; i < particles.length; i++) {
        //             particles[i].follow(flowfield);
        //             particles[i].update();
        //             particles[i].edges();
        //             particles[i].showParticle();
        //         }
        //     }
        // }
    };
    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        window.onresize = p5.setup;
    }
}
