const canvas = document.getElementById('fractalCanvas')
const ctx = canvas.getContext('2d')

function drawTriangle (p1, p2, p3, color){
ctx.beginPath()
ctx.moveTo(p1.x, p1.y)
ctx.lineTo(p2.x, p2.y)
ctx.lineTo(p3.x, p3.y)
ctx.closePath()
ctx.fillStyle = color
ctx.fill()
}