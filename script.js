const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');

function drawTriangle(p1, p2, p3, color) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function sierpinski(p1, p2, p3, depth) {
    if (depth === 0) {
        drawTriangle(p1, p2, p3, 'white');
    } else {
        const p4 = {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2
        };
        const p5 = {
            x: (p2.x + p3.x) / 2,
            y: (p2.y + p3.y) / 2
        };
        const p6 = {
            x: (p1.x + p3.x) / 2,
            y: (p1.y + p3.y) / 2  
        };

        sierpinski(p1, p4, p6, depth - 1);
        sierpinski(p4, p2, p5, depth - 1);
        sierpinski(p6, p5, p3, depth - 1);
    }
}


function animateFractal(depth) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const p1 = { x: canvas.width / 2, y: 20 };
    const p2 = { x: 20, y: canvas.height - 20 };
    const p3 = { x: canvas.width - 20, y: canvas.height - 20 };

    sierpinski(p1, p2, p3, depth);

    setTimeout(() => {
        animateFractal((depth + 1) % 8);
    }, 500);
}

animateFractal(0);
