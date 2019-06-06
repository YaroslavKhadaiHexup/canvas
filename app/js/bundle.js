var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//contact
var c = canvas.getContext('2d');

// c.fillStyle = 'pink';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'green';
// c.fillRect(200, 300, 100, 100);
//
// //Line
// c.beginPath();
// c.moveTo(200, 500);
// c.lineTo(300, 100);
// c.lineTo(500, 900);
// c.strokeStyle = 'red';
// c.stroke();
//
// //Arc / Circle
// for(i = 0; i < 100; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var size = Math.random() * 10;
//     c.beginPath();
//     c.arc(x, y, size, 0, Math.PI * 2, false);
//     c.strokeStyle = 'transparent';
//     c.fillStyle = getRandomColor();
//     c.fill();
//     c.stroke();
// }
//
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// c.beginPath();
// c.arc( 200, 200, 30, Math.PI*2, false);
// c.strokeStyle= 'red';
// c.stroke();


function Circle(x, y, dx, dy, rad) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.rad = rad;

    var color = getRandomColor();

    this.draw = function () {
        c.beginPath();
        c.arc( this.x, this.y, this.rad, Math.PI*2, false);
        c.strokeStyle = 'transparent';
        c.fillStyle = color;
        c.fill();
        c.stroke();
    };

    this.update = function () {
        if(this.x + this.rad > innerWidth || this.x  - this.rad < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.rad > innerHeight || this.y  - this.rad < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}

var circleArray = [];

var elementsNumber = window.innerWidth / 3;
console.log(elementsNumber);

for (i = 0; i < elementsNumber; i++) {
    //coordinates
    var x = Math.random() * (innerWidth - rad * 2);
    var y = Math.random() * (innerHeight - rad * 2);
    //velocity
    var dx = (Math.random() - 0.5) * 0.8;
    var dy = (Math.random() - 0.5) * 0.8;
    var rad = Math.random() * 10;

    circleArray.push(new Circle(x, y, dx, dy, rad));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for ( i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
animate();














