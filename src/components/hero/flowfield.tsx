import { Particle } from './particle';
import { SketchProps } from 'react-p5-wrapper';
import { scl, numParticles, inc } from './constants';
import './utilities';
import { P5CanvasInstance } from '@p5-wrapper/react';
import { Signal, signal } from '@preact/signals';

type MySketchProps = SketchProps & {
    rainbowMode: Signal;
    particleMode: Signal;
};

export function flow(p5: P5CanvasInstance<MySketchProps>) {
    let props: MySketchProps;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let z = 1;
    let delta = 0.00001; //lower results in vectors being more consistant
    let rows: number, cols: number;
    let flowfield: any[] = [];
    // let cleanfield: any[] = [];
    let particles: any[] = [];
    // let cleanup: any[] = [];
    let zoff = 0;
    // let z1off = -100 * delta;
    let particleMode = signal(false);
    let delayPassed = false;
    let explore = 4; // higher will result in particles following less
    let angleRange = Math.PI * 2 * 1.5;

    p5.updateWithProps = (props) => {
        if (props.rainbowMode) {
            props.rainbowMode.value = props.rainbowMode;
            // console.log('EDIT', rainbowMode);
        }
        if (props.particleMode.value) {
            props.particleMode.value = props.particleMode.value;
        }
    };
    // function getFramerate() {
    //     document.getElementById('fr').innerHTML =
    //         Math.floor(p5.frameRate()) +
    //         ' fps /  ' +
    //         particles.length +
    //         ' particles';
    // }
    // function loopZ(props: MySketchProps) {
    //     if (!props.particleMode.value) {
    //         z *= -1;
    //     }
    // }
    // setInterval(loopZ, 30000); // bounce every 30 seconds

    p5.setup = () => {
        width = p5.windowWidth;
        height = p5.windowHeight;
        p5.createCanvas(width, height);
        p5.pixelDensity(1);
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        particles = [];
        p5.background(particleMode.value ? '#222' : '#222');
        p5.noiseDetail(
            particleMode.value ? 1 : 4,
            particleMode.value ? 0.5 : 0.1
        );
        for (let x = 0; x < numParticles; x++) {
            const xVal = Math.random() * width;
            const yVal = Math.random() * height;
            particles.push(
                new Particle(p5, width, height, rows, cols, xVal, yVal)
            );
        }
        setTimeout(() => {
            delayPassed = true;
        }, 10000); // 10 seconds delay
    };

    p5.draw = () => {
        if (window.scrollY < window.innerHeight) {
            let xoff = 0;
            let yoff = 0;
            for (let y = 0; y < rows; y++) {
                xoff = 0;
                for (let x = 0; x < cols; x++) {
                    const index = x + y * cols;
                    const angle = p5.noise(xoff, yoff, zoff) * angleRange;
                    const v = p5.createVector(Math.cos(angle), Math.sin(angle));
                    v.setMag(particleMode.value ? 0.2 : explore);
                    flowfield[index] = v;
                    xoff += inc;
                }
                yoff += inc;
                zoff += z * delta;
            }
            for (let i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                particles[i].show();
            }
        }
    };

    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        window.onresize = p5.setup;
    }
}
