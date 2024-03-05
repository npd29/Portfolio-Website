import { Particle } from './particle';
import { SketchProps } from 'react-p5-wrapper';
import { scl, numParticles, inc } from './constants';
import './utilities';
import { P5CanvasInstance } from 'react-p5-wrapper';
import { Signal, signal } from '@preact/signals';
type MySketchProps = SketchProps & {
    rainbowMode: Signal;
    particleMode: Signal;
};
export function flow(p5: P5CanvasInstance<MySketchProps>) {
    const props = ;
    let width = window.innerWidth;
    let height = window.innerHeight;
    var z = 1;
    let rows: number, cols: number;
    let flowfield: any[] = [];
    // var myColor: number[] = [0, 255, 255];
    // var colorDelta = 0.1;
    let particles: any[] = [];
    var zoff = 0;
    // p5.updateWithProps = (props) => {
    //     // if (props.rainbowMode) {
    //     //     rainbowMode.value = props.rainbowMode;
    //     //     console.log('EDIT', rainbowMode);
    //     // }
    //     if (props.particleMode) {
    //         particleMode.value = props.particleMode;
    //     }
    // };

    // function getFramerate() {
    //     document.getElementById('fr').innerHTML =
    //         Math.floor(p5.frameRate()) +
    //         ' fps /  ' +
    //         particles.length +
    //         ' particles';
    // }
    function loopZ() {
        if (!props.particleMode.value) {
            z *= -1;
        }
    }

    // setInterval(getFramerate, 500);
    setInterval(loopZ, 30000); // bounce every 30 seconds

    p5.setup = () => {
        width = p5.windowWidth;
        height = p5.windowHeight;
        p5.createCanvas(width, height);
        p5.pixelDensity(1);
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        particles = [];
        // myColor = [0, 255, 255];
        for (var x = 0; x < numParticles; x++) {
            particles.push(new Particle(p5, width, height));
        }
        // isSetup = true;
    };

    p5.draw = () => {
        if (window.scrollY < window.innerHeight) {
            if (!props.particleMode.value) {
                p5.noiseDetail(4, 0.1);
                // p5.background('#222');
            } else {
                p5.background('#222');
                p5.noiseDetail(1, 0.5);
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
                    var v = p5.createVector(Math.cos(angle), Math.sin(angle));
                    if (!props.particleMode.value) {
                        v.setMag(10);
                    } else {
                        v.setMag(0.2);
                    }
                    flowfield[index] = v;
                    xoff += inc;
                }
                yoff += inc;
                zoff += z * 0.000006;
            }
            // if (rainbowMode) {
            //     myColor = [
            //         (myColor[0] += colorDelta),
            //         (myColor[1] -= colorDelta),
            //         myColor[2]
            //     ];
            //     if (myColor[0] >= 255) {
            //         colorDelta = -1;
            //     } else if (myColor[1] >= 255) {
            //         colorDelta = 1;
            //     }
            // }
            // p5.stroke(myColor[0], myColor[1], myColor[2], 10);
            if (!props.particleMode.value) {
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
        }
        // Initialize the setup function on window resize
        if (window.screen.width > 780) {
            window.onresize = p5.setup;
        }
    };
}
