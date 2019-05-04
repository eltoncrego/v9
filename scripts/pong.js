var cxv = 15 * (Math.random() < 0.5 ? -1 : 1);
var cyv = 4 * (Math.random() < 0.5 ? -1 : 1);

window.onload = function() {
  // Basic setup
  canvas = document.getElementById('pong');
  cxt = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Game settings
  var fps = 60;
  var state = {
    bgColor: '#000000',
    ball: {
      x: canvas.width/2-8,
      y: canvas.height/2-8,
      color: '#FFFFFF',
      radius: 8,
      xVelocity : cxv,
      yVelocity : cyv
    },
    player: {
      x: 0,
      y: canvas.height/2 - 100,
      width: 8,
      height: 128,
      color: '#FFFFFF',
    },
    ai: {
      x: canvas.width-8,
      y: canvas.height/2 - 100,
      width: 8,
      height: 128,
      color: '#FFFFFF',
      yVelocity: 20,
    },
    paused: false
  };

  // Set up controls
  window.addEventListener('mousemove', function(event) {
    if (!state.paused){
      var mousePosition = calculateMousePosition(event);
      state.player.y = mousePosition.y-64;
    }
  });

  window.addEventListener('click', function(event) {
    togglePause(state);
  });

  // Game begins here
  draw(state);
  setInterval(function() {
    state.ball.x += state.ball.xVelocity;
    state.ball.y += state.ball.yVelocity;
    state.ai.y += state.ball.yVelocity;
    draw(state);
  }, 1000/fps);
}

function draw(state) {
  drawRectangle(0, 0, canvas.width, canvas.height, state.bgColor);
  // position logic for the ball
  var ball = state.ball;
  checkBallHitBox(ball, state);
  drawCircle(ball.x, ball.y, ball.radius, ball.color);

  //position logic for player
  var player = state.player;
  drawRectangle(player.x, player.y, player.width, player.height, player.color);

  //position logic for ai
  var ai = state.ai;
  drawRectangle(ai.x, ai.y, ai.width, ai.height, ai.color);
}

function checkBallHitBox(ball, state) {
  if (ball.x <= 4) {
    if (ball.y > state.player.y && ball.y < (state.player.y + 128)) {
      ball.xVelocity *= -1;
      cxv *= -1;
    } else {
      // reset ball on loss
      resetGame(state);
    }
  }
  if (ball.x >= canvas.width-4-ball.radius) {
    if (ball.y > state.ai.y && ball.y < (state.ai.y + 128)) {
      ball.xVelocity *= -1;
      cxv *= -1;
    } else {
      // reset ball on win
      resetGame(state);
    }
  }

  if (ball.y >= canvas.height-ball.radius || ball.y <= 0) {
    ball.yVelocity *= -1;
    cyv *= -1;
  }
}

function calculateMousePosition(event) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = event.clientX - rect.left - root.scrollLeft;
  var mouseY = event.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

function computerMovement(state) {
  if (state.ai.y < state.ball.y - 35) {
    state.ai.yVelocity = 20;
  } else if (state.ai.y + 128 > state.ball.y + 35){
    state.ai.yVelocity = -20;
  }
}

function togglePause(state) {
  if (state.paused) {
    // do nothing
    state.ball.xVelocity = cxv;
    state.ball.yVelocity = cyv;
  } else {
    state.ball.xVelocity = 0;
    state.ball.yVelocity = 0;
  }
  state.paused = !state.paused;
}

function resetGame(state) {
  state.ball.x = canvas.width/2 - 8;
  state.ball.y = canvas.height/2 - 8;
  cxv = cxv * -1;
  cyv = 4 * (Math.random() < 0.5 ? -1 : 1);
  state.ball.xVelocity = cxv;
  state.ball.yVelocity = cyv;
  state.ai = {
    x: canvas.width-8,
    y: canvas.height/2 - 100,
    width: 8,
    height: 128,
    color: '#FFFFFF',
    yVelocity: 20,
  };
}

function drawRectangle(x, y, w, h, color) {
  cxt.fillStyle = color;
  cxt.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  cxt.fillStyle = color;
  cxt.beginPath();
  cxt.arc(x, y, r, 0, Math.PI*2, true);
  cxt.fill();
}
