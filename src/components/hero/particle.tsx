import 'p5';
import { scl } from './constants';
import p5 from 'p5';
export class Particle {
    p5: p5;
    width: number;
    height: number;
    rows: number;
    cols: number;
    pos: p5.Vector;
    vel: p5.Vector;
    acc: p5.Vector;
    maxSpeed: number;
    prevPos: p5.Vector;
    color: number[];
    constructor(
        p5: p5,
        color: number[],
        maxSpeed: number,
        width: number,
        height: number,
        rows: number,
        cols: number,
        x: number,
        y: number
    ) {
        this.p5 = p5;
        this.width = width;
        this.height = height;
        this.rows = rows;
        this.cols = cols;
        this.pos = p5.createVector(x, y);
        this.vel = p5.createVector(0, 0);
        this.acc = p5.createVector(0, 0);
        this.maxSpeed = maxSpeed;
        this.prevPos = this.pos.copy();
        this.color = color;
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    setColor(color: number[]) {
        this.color = color;
    }

    follow(vectors: p5.Vector[]) {
        var x = Math.floor(this.pos.x / scl);
        var y = Math.floor(this.pos.y / scl);
        var index = x + y * Math.floor(window.innerWidth / scl);
        var force = vectors[index];
        this.applyForce(force);
    }
    applyForce(force: p5.Vector) {
        // console.log(this.acc.x, this.acc.y);

        this.acc.add(force);
    }

    show(color: number[]) {
        this.p5.stroke(color[0], color[1], color[2], color[3]);
        this.p5.strokeWeight(1);
        this.p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }
    showParticle(color: number[]) {
        this.p5.stroke(color[0], color[1], color[2], color[3]);
        this.p5.strokeWeight(5);
        this.p5.point(this.pos.x, this.pos.y);
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
export default Particle;
