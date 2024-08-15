import { Particle } from './particle';
import { SketchProps } from 'react-p5-wrapper';
import { scl, numParticles, inc, rainbowMode } from './constants';
import './utilities';
import { P5CanvasInstance } from '@p5-wrapper/react';
import { Signal, signal } from '@preact/signals';
import { Mode, Settings } from '../../types';
import { defaultSettings } from '../../store';

type MySketchProps = SketchProps & {
    mode: Mode;
    settings: Settings;
};

export function flow(p5: P5CanvasInstance<MySketchProps>) {
    let props: MySketchProps;
    let settings = defaultSettings[Mode.FLOW];
    let play = true;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let z = 1;
    let delta = 0.00001; //lower results in vectors being more consistant
    let rows: number, cols: number;
    let flowfield: any[] = [];
    let rainbowMode = true;
    let particles: any[] = [];
    let zoff = 0;
    let delayPassed = false;
    let explore = 4; // higher will result in particles following less
    let angleRange = Math.PI * 2 * 1.5;
    let myMode = Mode.FLOW;
    let opacity = 100;
    let myColor = [0, 255, 255, opacity];
    let dontDraw = true;
    let colorDelta = 1;

    function changeColor() {
        if (rainbowMode) {
            myColor = [
                (myColor[0] += colorDelta),
                (myColor[1] -= colorDelta),
                myColor[2],
                settings.color[3]
            ];
            if (myColor[0] >= 255) {
                colorDelta = -1;
            } else if (myColor[1] >= 255) {
                colorDelta = 1;
            }
        }
    }
    p5.updateWithProps = (props) => {
        myMode = props.mode;
        settings = props.settings;
        play = settings.play ?? true;
        rainbowMode = settings.rainbowMode ?? false;
        myColor[3] = settings.color[3];
        myMode == Mode.FLOW && setInterval(loopZ, 30000); // bounce every 30 seconds
        rainbowMode && setInterval(changeColor, 250);
        setTimeout(() => {
            p5 && p5.background('#222');
        }, 100); // 10 seconds delay
    };
    // function getFramerate() {
    //     document.getElementById('fr').innerHTML =
    //         Math.floor(p5.frameRate()) +
    //         ' fps /  ' +
    //         particles.length +
    //         ' particles';
    // }
    function loopZ() {
        z *= -1;
    }

    p5.setup = () => {
        width = p5.windowWidth;
        height = p5.windowHeight;
        p5.createCanvas(width, height);
        p5.pixelDensity(1);
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        particles = [];
        p5.background('#222');
        p5.noiseDetail(settings.noiseDetail, settings.falloff);

        for (let x = 0; x < numParticles; x++) {
            const xVal = Math.random() * width;
            const yVal = Math.random() * height;
            particles.push(
                new Particle(
                    p5,
                    myColor,
                    settings.maxspeed,
                    width,
                    height,
                    rows,
                    cols,
                    xVal,
                    yVal
                )
            );
        }

        // setTimeout(() => {
        //     delayPassed = true;
        // }, 10000); // 10 seconds delay
    };

    p5.draw = () => {
        if (play && window.scrollY < window.innerHeight) {
            myMode == Mode.PARTICLE && p5.background('#222');

            let xoff = 0;
            let yoff = 0;
            for (let y = 0; y < rows; y++) {
                xoff = 0;
                for (let x = 0; x < cols; x++) {
                    const index = x + y * cols;
                    const angle =
                        p5.noise(xoff, yoff, zoff) * settings.angleRange;
                    const v = p5.createVector(Math.cos(angle), Math.sin(angle));
                    v.setMag(settings.explore);
                    flowfield[index] = v;
                    xoff += inc;
                }
                yoff += inc;
                zoff += z * settings.delta;
            }
            for (let i = 0; i < particles.length; i++) {
                particles[i].follow(flowfield);
                particles[i].update();
                particles[i].edges();
                myMode == Mode.PARTICLE
                    ? particles[i].showParticle(myColor)
                    : particles[i].show(myColor);
            }
        }
    };

    // Initialize the setup function on window resize
    if (window.screen.width > 780) {
        window.onresize = p5.setup;
    }
}
