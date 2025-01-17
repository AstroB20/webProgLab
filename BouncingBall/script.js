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

      // Animation function
      function animate() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the ball
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();

        // Update ball position
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Check for collisions with walls
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
          // Toggle color between black and grey
          ball.color = ball.color === "black" ? "pink" : "black";
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
          // Toggle color between black and grey
          ball.color = ball.color === "black" ? "pink" : "black";
        }

        requestAnimationFrame(animate);
      }

      animate();