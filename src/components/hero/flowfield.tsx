import { Particle } from './particle';
import { SketchProps } from 'react-p5-wrapper';
import { scl, numParticles, inc, myColor, opacity } from './constants';
import './utilities';
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react';
import { Signal, signal } from '@preact/signals';

type MySketchProps = SketchProps & {
    rainbowMode: boolean;
    particleMode: boolean;
};

export function flow(p5: P5CanvasInstance<MySketchProps>) {
    let props: MySketchProps;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let z = 1;
    let delta = 0.000006;
    let rows: number, cols: number;
    let flowfield: any[] = [];
    // let cleanfield: any[] = [];
    let particles: any[] = [];
    // let cleanup: any[] = [];
    let zoff = 0;
    // let z1off = -100 * delta;
    let particleMode = false;
    let delayPassed = false;
    let currentColor = myColor;

    p5.updateWithProps = (props) => {
        if (props.rainbowMode) {
            props.rainbowMode = props.rainbowMode;
            // console.log('EDIT', rainbowMode);
        }
        if (props.particleMode) {
            props.particleMode = props.particleMode;
        }
    };
    // function getFramerate() {
    //     document.getElementById('fr').innerHTML =
    //         Math.floor(p5.frameRate()) +
    //         ' fps /  ' +
    //         particles.length +
    //         ' particles';
    // }
    function loopZ(props: MySketchProps) {
        if (!props.particleMode) {
            z *= -1;
        }
    }
    setInterval(loopZ, 30000); // bounce every 30 seconds

    p5.setup = () => {
        width = p5.windowWidth;
        height = p5.windowHeight;
        p5.createCanvas(width, height);
        p5.pixelDensity(1);
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        // cleanfield = new Array(cols * rows);
        particles = [];
        // cleanup = [];
        p5.background(particleMode ? '#222' : '#222');
        p5.noiseDetail(particleMode ? 1 : 4, particleMode ? 0.5 : 0.1);
        for (let x = 0; x < numParticles; x++) {
            const xVal = Math.random() * width;
            const yVal = Math.random() * height;
            particles.push(
                new Particle(
                    p5,
                    currentColor,
                    width,
                    height,
                    rows,
                    cols,
                    xVal,
                    yVal
                )
            );
            // temp.color = [34, 34, 34, 10];
            // cleanup.push(
            //     new Particle(p5, width, height, rows, cols, xVal, yVal)
            // );
            // cleanup[x].color = [255, 255, 255, 50];
        }
        setTimeout(() => {
            delayPassed = true;
        }, 10000); // 10 seconds delay
    };
    function changeColor() {
        if (props.rainbowMode) {
            currentColor = [
                (currentColor[0] += delta),
                (currentColor[1] -= delta),
                currentColor[2],
                opacity
            ];
            if (currentColor[0] >= 255) {
                delta = -1;
            } else if (currentColor[1] >= 255) {
                delta = 1;
            }
        }
    }
    p5.draw = () => {
        if (window.scrollY < window.innerHeight) {
            let xoff = 0;
            let yoff = 0;
            for (let y = 0; y < rows; y++) {
                xoff = 0;
                for (let x = 0; x < cols; x++) {
                    const index = x + y * cols;
                    const angle =
                        p5.noise(xoff, yoff, zoff) * Math.PI * 2 * 1.5;
                    const angle1 =
                        p5.noise(xoff, yoff, zoff) * Math.PI * 2 * 1.5;
                    const v = p5.createVector(Math.cos(angle), Math.sin(angle));
                    const v1 = p5.createVector(
                        Math.cos(angle1),
                        Math.sin(angle1)
                    );
                    v.setMag(particleMode ? 0.2 : 10);
                    v1.setMag(particleMode ? 0.2 : 10);
                    flowfield[index] = v;
                    // cleanfield[index] = v1;
                    xoff += inc;
                }
                yoff += inc;
                zoff += z * delta;
                // z1off += z * delta;
            }
            for (let i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                // if (delayPassed) {
                //     cleanup[i].follow(cleanfield);
                //     cleanup[i].update();
                //     cleanup[i].edges();
                // }
                if (particleMode) {
                    particles[i].show();
                } else {
                    particles[i].show();
                    // if (delayPassed) {
                    //     cleanup[i].show();
                    // }
                }
            }
        }
    };

    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        // window.onresize = p5.setup;
    }
}
