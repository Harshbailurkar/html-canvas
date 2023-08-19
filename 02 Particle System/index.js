const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(canvas);
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particalArray = [];

const mouse = {
  x: null,
  y: null,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Partical {
  constructor() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15 + 1; // random size
    // horizontal speed property
    this.speedX = Math.random() * 3 - 1.5; // random no betn +1.5 and -1.5
    // vertical spreed property
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();
  }
}
function init() {
  // name of function can be diff.
  for (let i = 0; i < 100; i++) {
    particalArray.push(new Partical());
  }
}
init();
function handleParticles() {
  for (let i = 0; i < particalArray.length; i++) {
    particalArray[i].update();
    particalArray[i].draw();
    if (particalArray[i].size <= 0.3) {
      particalArray.splice(i, 1);
      i--;
    }
  }
}
console.log();
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();
