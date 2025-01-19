const canvas = document.getElementById("bouncingBallCanvas");
const ctx = canvas.getContext("2d");

let ball = {
  x: canvas.width / 2 + Math.random() * (canvas.width / 2) - 5, //avoid starting at the edge so starting 5 px away
  y: canvas.height / 2 + Math.random() * (canvas.height / 2) - 5,
  radius: 5,
  dx: 0.5,
  dy: 1,
  color: "green",
};
function animate() {
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
    ball.color = ball.color === "green" ? "red" : "green";
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
    ball.color = ball.color === "green" ? "red" : "green";
  }

  requestAnimationFrame(animate);
}

animate()
