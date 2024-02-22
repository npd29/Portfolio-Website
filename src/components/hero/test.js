import p5Types from 'p5';
export function sketch(p5) {
    let myvec;
    let coordinates = [0, 0];
    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        p5.pixelDensity(1);
        // p5.setOrigin(0, 0);
        // this.myvec = p5.b?ox(100);
        // isSetup = true;
    };

    p5.draw = () => {
        var endCoords = [p5.mouseX, p5.mouseY];
        // p5.normalMaterial();
        p5.push();
        // p5.rotateZ(p5.frameCount * 0.01);
        // p5.rotateX(p5.frameCount * 0.01);
        // p5.rotateY(p5.frameCount * 0.01);
        // p5.plane(100);
        // p5.point(10, 40);
        p5.stroke([255, 0, 255], 0.01);
        p5.strokeWeight(4);
        var temp = p5.line(
            coordinates[0],
            coordinates[1],
            endCoords[0],
            endCoords[1]
        );
        // console.log(temp);
        p5.point(10, 40);
        p5.constructor.Vector.random2D(0, 0, 10, 10);
        // console.log(temp);
        var angle = p5.noise(1, 1, 1) * Math.PI * 2 * 1.5;
        // console.log(angle);
        p5.constructor.Vector.fromAngle(angle);
        // p5.plane(100);
        p5.pop();
    }; // Initialize the setup function on window resize
}
