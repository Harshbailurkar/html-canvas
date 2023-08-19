const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(canvas);
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(10, 20, 150, 50);
});
ctx.fillStyle = "white";

ctx.lineWidth = 5;

ctx.fillRect(10, 20, 150, 50); //x cordinate,y cordinate, width,height

const mouse = {
  x: 100,
  y: 100,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
}
//x cordinate, y cordinate,radis, start angle,end angle

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  requestAnimationFrame(animate);
}
animate();
