var canvas = document.querySelector('canvas');
var headSection = document.getElementById('head-section');
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;


canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

var ctx = canvas.getContext('2d');
  
let isPainting = false;
let lineWidth = 1;
let tailLength = 250;

let startX;
let startY;

let points = [];

function draw() {
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "butt";
    ctx.strokeStyle = "white";

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();

    for (let i = 0; i < tailLength; i += 2)
        ctx.lineTo(points[i], points[i + 1]);
    
    ctx.stroke();
}

function addPoints(e) {
    if (!isPainting) {
        return;
    }
    points.unshift(e.clientX, e.clientY);
    console.log(points);
    
}

function anim(e) {
    cleanTail();
    addPoints(e);
    draw();
}

function cleanTail() {
    points.length = tailLength * 2;
}

headSection.addEventListener('mouseover', (e) => {
    isPainting = true;
    console.log(isPainting)

})

headSection.addEventListener('mouseleave', () => {
    isPainting = false;
    ctx.beginPath();
    console.log(isPainting);
})

headSection.addEventListener('mousemove', (e) => {
    anim(e);
});
