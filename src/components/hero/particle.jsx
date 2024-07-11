import 'p5';
import { cols, rows, scl, myColor } from './constants';
let particleOpacity = 255;
let flowOpacity = 10;
export class Particle {
    constructor(p5, width, height, x, y) {
        this.p5 = p5;
        this.width = width;
        this.height = height;
        this.pos = p5.createVector(x, y);
        this.vel = p5.createVector(0, 0);
        this.acc = p5.createVector(0, 0);
        this.maxspeed = 8;
        this.prevPos = this.pos.copy();
        this.color = myColor;
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    setColor(color) {
        this.color = color;
    }

    follow(vectors) {
        var x = Math.floor(this.pos.x / scl);
        var y = Math.floor(this.pos.y / scl);
        var index = x + y * Math.floor(window.innerWidth / scl);
        var force = vectors[index];
        this.applyForce(force);
    }
    applyForce(force) {
        // console.log(this.acc.x, this.acc.y);

        this.acc.add(force);
    }

    show() {
        this.p5.stroke(
            this.color[0],
            this.color[1],
            this.color[2],
            flowOpacity
        );
        this.p5.strokeWeight(1);
        this.p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }
    showParticle() {
        this.p5.stroke(
            this.color[0],
            this.color[1],
            this.color[2],
            particleOpacity
        );
        this.p5.strokeWeight(3);
        this.p5.constructor.point(this.pos.x, this.pos.y);
    }

    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges() {
        if (this.pos.x > this.width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = this.width;
            this.updatePrev();
        }
        if (this.pos.y > this.height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = this.height;
            this.updatePrev();
        }
    }
}
