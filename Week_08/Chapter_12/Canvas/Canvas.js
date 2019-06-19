let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    let canvas = document.getElementById("demo2");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";
    let img = new Image();
    img.src = "./100x100.jpg";
    img.onload = function() {
        let pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 180, 180);
        context.strokeRect(10, 10, 180, 180);
    };
}

drawPattern();

function drawGradient() {
    let canvas = document.getElementById("demo3");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";
    let gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
    }

drawGradient();

function drawCircle(canvas) {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
    }

drawCircle(document.getElementById("demo4"))

let canvas5 = document.getElementById("demo5");
drawCircle(canvas5);
function saveDrawing() {
    window.open(canvas5.toDataURL("image/png"));
    }

let button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);