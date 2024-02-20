import 'p5';
import {
    cols,
    rows,
    scl,
    width,
    height,
    myColor,
    flowOpacity,
    particleOpacity
} from './constants';

export class Particle {
    constructor(p5) {
        this.p5 = p5;
        this.pos = p5.createVector(Math.random(width), Math.random(height));
        this.vel = p5.createVector(0, 0);
        this.acc = p5.createVector(0, 0);
        this.maxspeed = 8;
        this.prevPos = this.pos.copy();
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    follow(vectors) {
        var x = Math.floor(this.pos.x / scl);
        var y = Math.floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        this.p5.stroke(myColor[0], myColor[1], myColor[2], flowOpacity);

        this.p5.strokeWeight(1);

        this.p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }
    showParticle() {
        this.p5.stroke(myColor[0], myColor[1], myColor[2], particleOpacity);
        this.p5strokeWeight(3);
        this.p5.point(this.pos.x, this.pos.y);
    }

    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}
