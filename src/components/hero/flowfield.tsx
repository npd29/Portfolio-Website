import { Particle } from './particle';
import { SketchProps } from 'react-p5-wrapper';
import { scl, numParticles, inc, rainbowMode } from './constants';
import './utilities';
import { P5CanvasInstance } from '@p5-wrapper/react';
import { Mode, Settings } from '../../types';
import { defaultSettings } from '../../store';
import { Vector } from 'p5';
type FlowVector = { x: number; y: number };

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
    let rows: number, cols: number;
    let flowfield: Vector[] = [];
    let rainbowMode = true;
    let particles: Particle[] = [];
    let zoff = 0;
    let myMode = Mode.FLOW;
    let opacity = 5;
    let myColor = [0, 255, 255, opacity];
    let colorDelta = 1;
    let resizeTimeout: any;

    function changeColor() {
        if (rainbowMode) {
            myColor = [
                (myColor[0] += colorDelta),
                (myColor[1] -= colorDelta),
                myColor[2],
                settings.color![3]
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
        myColor[3] = settings.opacity;
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
    function initializeFlowfield() {
        flowfield = Array.from({ length: cols * rows }, () =>
            p5.createVector(0, 0)
        );
    }

    function initializeParticles(): Particle[] {
        const particleCount =
            width < 600 ? Math.floor(numParticles / 3) : numParticles;
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            const x = p5.random(width);
            const y = p5.random(height);

            const particle = new Particle(
                p5,
                myColor,
                settings.maxspeed,
                width,
                height,
                rows,
                cols,
                x,
                y
            );

            // Initialize with a small random velocity
            particle.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
            particle.vel.setMag(p5.random(0.1, settings.maxspeed));

            particles.push(particle);
        }

        return particles;
    }
    // Function to clear the canvas
    function clearCanvas() {
        p5.background('#222');
        particles = initializeParticles();
    }

    // Set a timer to clear the canvas after 5 minutes
    setTimeout(clearCanvas, 300000);
    p5.setup = () => {
        width = p5.windowWidth;
        height = p5.windowHeight;
        p5.createCanvas(width, height);
        p5.pixelDensity(1);
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        initializeFlowfield();
        particles = [];
        p5.background('#222');
        p5.noiseDetail(settings.noiseDetail, settings.falloff);

        particles = initializeParticles();

        // setTimeout(() => {
        //     delayPassed = true;
        // }, 10000); // 10 seconds delay
    };

    p5.draw = () => {
        if (play && window.scrollY < window.innerHeight) {
            if (myMode === Mode.PARTICLE) {
                p5.background('#222');
            }

            updateFlowfield();
            updateParticles();
        }
    };

    function updateFlowfield() {
        let xoff = 0;
        let yoff = 0;

        for (let y = 0; y < rows; y++) {
            xoff = 0;
            for (let x = 0; x < cols; x++) {
                const index = x + y * cols;
                const angle =
                    p5.noise(xoff, yoff, zoff) * (settings.angleRange ?? 1);
                const v = p5.createVector(Math.cos(angle), Math.sin(angle));
                v.setMag(settings.followFactor);
                flowfield[index] = v;
                xoff += inc;
            }
            yoff += inc;
        }

        zoff += z * settings.delta;
    }

    function updateParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield);
            particles[i].update();
            particles[i].edges();

            if (myMode === Mode.PARTICLE) {
                particles[i].showParticle(myColor);
            } else {
                particles[i].show(myColor);
            }
        }
    }

    // Initialize the setup function on window resize
    window.onresize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            handleResize();
        }, 250); // Adjust debounce delay as needed
    };

    function handleResize() {
        if (window.innerWidth < 900) return;
        width = window.innerWidth;
        height = window.innerHeight;

        p5.resizeCanvas(width, height);

        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);

        initializeFlowfield();
        particles = initializeParticles();
    }
}
