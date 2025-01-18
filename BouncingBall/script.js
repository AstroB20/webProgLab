const canvas = document.getElementById("bouncingBallCanvas");
      const ctx = canvas.getContext("2d");

      let ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 40,
        dx: 0.2,
        dy: 0.7,
        color: "black",
      };
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
        ball.x += ball.dx;
        ball.y += ball.dy;
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
          ball.color = ball.color === "black" ? "pink" : "black";
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
          ball.color = ball.color === "black" ? "pink" : "black";
        }

        requestAnimationFrame(animate);
      }

      animate();
