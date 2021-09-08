var canvas;
var context;
var drawing = false;
var prevX = 0;
var currX = 0;
var prevY = 0;
var currY = 0;

function startDrawing (event) {
    prevX = currX;
    prevY = currY;
    currX = event.clientX - canvas.offsetLeft;
    currY = event.clientY - canvas.offsetTop;

    drawing = true;

    context.beginPath();
    context.fillStyle = 'black';
    context.fillRect(currX, currY, 2, 2);
    context.closePath();
}

function draw(event) {
    if (drawing) {
        prevX = currX;
        prevY = currY;
        currX = event.clientX - canvas.offsetLeft;
        currY = event.clientY - canvas.offsetTop;

        context.beginPath();
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.stroke();
        context.closePath();
    }
}

function stopDrawing () {
    drawing = false;
}

function activateCanvas() {
    canvas = document.getElementById('signature');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousedown', startDrawing, false);

    canvas.addEventListener('mousemove', draw, false);

    document.addEventListener('mouseup', stopDrawing, false);
}
