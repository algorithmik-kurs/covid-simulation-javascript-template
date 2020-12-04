const drawingCanvas = document.getElementById("drawingCanvas");
const canvas2D = drawingCanvas.getContext("2d");

console.log(canvas2D);

var persons = [];

let personCount = 20;

class Person {
    constructor(x, y, infected) {
        this.x = x || 500;
        this.y = y || 500;
        this.infected = infected;

        this.speedX = Math.random(10);
        this.speedY = Math.random(10);
    }
    display(context) {
        context.beginPath();
        context.fillStyle = 'green';
        context.lineWidth = 0;
        context.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
    }
    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

for(let i = 0; i < personCount; i++) {
    persons.push(new Person(400, 400));
}

// Draw Loop
setInterval(function() {
    //reset Canvas
    canvas2D.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

    for(person of persons) {
        person.move();
        person.display(canvas2D);
    }
}, 100);