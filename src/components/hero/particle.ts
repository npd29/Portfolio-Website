import { cols } from './flowfield';
import { width, height, scl } from './constants';
import { P5CanvasInstance } from 'react-p5-wrapper';
import { Vector } from 'p5';
export class Particle {
    p5: P5CanvasInstance;
    color: number[];
    flowOpacity: number;
    particleOpacity: number;
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    maxSpeed: number;
    prevPos: Vector;

    constructor(p5: P5CanvasInstance) {
        this.p5 = p5;
        this.color = [0, 255, 255];
        this.flowOpacity = 10;
        this.particleOpacity = 255;
        this.position = p5.createVector(p5.random(width), p5.random(height));
        this.velocity = p5.createVector(0, 0);
        this.acceleration = p5.createVector(0, 0);
        this.maxSpeed = 8;
        this.prevPos = this.position.copy();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    follow(vectors: Vector[]) {
        var x = Math.floor(this.position.x / scl);
        var y = Math.floor(this.position.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    applyForce(force: Vector) {
        this.acceleration.add(force);
    }

    show() {
        this.p5.stroke(
            this.color[0],
            this.color[1],
            this.color[2],
            this.flowOpacity
        );

        this.p5.strokeWeight(1);

        this.p5.line(
            this.position.x,
            this.position.y,
            this.prevPos.x,
            this.prevPos.y
        );
        this.updatePrev();
    }
    showParticle() {
        this.p5.stroke(
            this.color[0],
            this.color[1],
            this.color[2],
            this.particleOpacity
        );
        this.p5.strokeWeight(3);
        this.p5.point(this.position.x, this.position.y);
    }

    updatePrev() {
        this.prevPos.x = this.position.x;
        this.prevPos.y = this.position.y;
    }

    edges() {
        if (this.position.x > width) {
            console.log(this.position.x, width);
            this.position.x = 0;
            this.updatePrev();
        }
        if (this.position.x < 0) {
            this.position.x = width;
            this.updatePrev();
        }
        if (this.position.y > height) {
            this.position.y = 0;
            this.updatePrev();
        }
        if (this.position.y < 0) {
            this.position.y = height;
            this.updatePrev();
        }
    }
}
