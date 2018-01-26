var horsePlayer1, horsePlayer2;
var audio = new Audio("audio.mp3");
var yeahSound = new Audio("happykids.mp3");
document.getElementById("start-game-button").onclick = function() {
  audio.play();
  horsePlayer1 = new Horse();
  horsePlayer2 = new Horse();
  horsePlayer1.image = horse1;
  horsePlayer2.image = horse2;
  horsePlayer1.chooseColorAndName();
  horsePlayer2.chooseColorAndName();
  horsePlayer1.defineMyHorse();
  horsePlayer2.defineMyHorse();
  document.getElementById("player1").setAttribute("value", horsePlayer1.name);
  document.getElementById("player2").setAttribute("value", horsePlayer2.name);
  document
    .getElementById("player1")
    .setAttribute("style", "background:" + horsePlayer1.color);
  document
    .getElementById("player2")
    .setAttribute("style", "background:" + horsePlayer2.color);
  document
    .getElementById("steps1")
    .setAttribute("style", "background:" + horsePlayer1.color);
  document
    .getElementById("steps2")
    .setAttribute("style", "background:" + horsePlayer2.color);
};

function BoardCanvas() {
  this.ctx = document.getElementById("canvas").getContext("2d");
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawDots();
}

BoardCanvas.prototype.drawDots = function() {
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(40 + i * 40, 302.5);
    this.ctx.arc(25 + i * 40, 302.5, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 8; i < 15; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(40 + i * 40, 302.5);
    this.ctx.arc(25 + i * 40, 302.5, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(40 + i * 40, 382.5);
    this.ctx.arc(25 + i * 40, 382.5, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 8; i < 15; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(40 + i * 40, 382.5);
    this.ctx.arc(25 + i * 40, 382.5, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 0; i < 6; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(277.5, 65 + i * 40);
    this.ctx.arc(262.5, 65 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 9; i < 15; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(277.5, 65 + i * 40);
    this.ctx.arc(262.5, 65 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }

  for (var i = 0; i < 6; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(357.5, 65 + i * 40);
    this.ctx.arc(342.5, 65 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 9; i < 15; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(357.5, 65 + i * 40);
    this.ctx.arc(342.5, 65 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(40 + i * 40, 342.5);
    this.ctx.arc(25 + i * 40, 342.5, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "#ff4108";
    this.ctx.fill();
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(360 + i * 40, 342.5);
    this.ctx.arc(345 + i * 40, 342.5, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "#4b98ce";
    this.ctx.fill();
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(317.5, 65 + i * 40);
    this.ctx.arc(302.5, 65 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "#fdff0d";
    this.ctx.fill();
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(317.5, 385 + i * 40);
    this.ctx.arc(302.5, 385 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "#99d50e";
    this.ctx.fill();
    this.ctx.stroke();
  }
};

BoardCanvas.prototype.showCurrentPosition = function(horse) {
  this.ctx.beginPath();
  this.ctx.lineWidth = 4;
  this.ctx.moveTo(horse.currentPosition[0] + 10, horse.currentPosition[1]);
  this.ctx.drawImage(
    horse.image,
    horse.currentPosition[0] - 20,
    horse.currentPosition[1] - 20,
    40,
    40
  );
};
//horses images
var horse1 = new Image();
horse1.src = "./images/horse1.png";
var horse2 = new Image();
horse2.src = "./images/horse2.jpg";
//dice faces
var face1 = new Image();
face1.src = "./images/de1.png";
var face2 = new Image();
face2.src = "./images/de2.png";
var face3 = new Image();
face3.src = "./images/de3.png";
var face4 = new Image();
face4.src = "./images/de4.png";
var face5 = new Image();
face5.src = "./images/de5.png";
var face6 = new Image();
face6.src = "./images/de6.png";

function player1Plays() {
  document.getElementById("player1").setAttribute("disabled", true);
  document.getElementById("steps1").setAttribute("disabled", true);
  document.getElementById("steps2").removeAttribute("disabled");
  document.getElementById("player2").removeAttribute("disabled");
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document.images["mydice"].src = eval("face" + randomdice + ".src");
  horsePlayer1.throw = randomdice;

  if (horsePlayer1.start === false) {
    horsePlayer1.canStartPiece(horsePlayer2.name);
    if (
      horsePlayer1.currentPosition.toString() ===
      horsePlayer1.properties.startPosition.toString()
    ) {
      board.showCurrentPosition(horsePlayer1);
      horsePlayer1.start = true;
    }
  } else {
    horsePlayer1.moveForward();
    horsePlayer2.defineMyHorse();
    if (horsePlayer1.canKickThePlayer(horsePlayer2)) {
      horsePlayer2.currentPosition = horsePlayer2.properties.startPosition;
    }
    board = new BoardCanvas();
    board.showCurrentPosition(horsePlayer2);
    board.showCurrentPosition(horsePlayer1);
    horsePlayer1.canDoFinalSteps();
  }
}
function player1Steps() {
  document.getElementById("player1").setAttribute("disabled", true);
  document.getElementById("player2").removeAttribute("disabled");
  document.getElementById("steps1").setAttribute("disabled", true);
  document.getElementById("steps2").removeAttribute("disabled");
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document.images["mydice"].src = eval("face" + randomdice + ".src");
  horsePlayer1.throw = randomdice;
  board = new BoardCanvas();
  board.showCurrentPosition(horsePlayer2);
  horsePlayer1.doFinalSteps();
  board.showCurrentPosition(horsePlayer1);
  if (horsePlayer1.isTheWinner()) {
    board.gameOver(horsePlayer1.name);
  }
}
function player2Plays() {
  document.getElementById("player2").setAttribute("disabled", true);
  document.getElementById("steps1").removeAttribute("disabled");
  document.getElementById("steps2").setAttribute("disabled", true);
  document.getElementById("player1").removeAttribute("disabled");
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document.images["mydice"].src = eval("face" + randomdice + ".src");
  horsePlayer2.throw = randomdice;
  if (horsePlayer2.start === false) {
    horsePlayer2.canStartPiece(horsePlayer1.name);
    if (
      horsePlayer2.currentPosition.toString() ===
      horsePlayer2.properties.startPosition.toString()
    ) {
      horsePlayer2.start = true;
      board.showCurrentPosition(horsePlayer2);
    }
  } else {
    horsePlayer2.moveForward();
    horsePlayer1.defineMyHorse();
    if (horsePlayer2.canKickThePlayer(horsePlayer1)) {
      horsePlayer1.currentPosition = horsePlayer1.properties.startPosition;
    }
    board = new BoardCanvas();
    board.showCurrentPosition(horsePlayer1);
    board.showCurrentPosition(horsePlayer2);
    horsePlayer2.canDoFinalSteps();
  }
}
function player2Steps() {
  document.getElementById("player2").setAttribute("disabled", true);
  document.getElementById("player1").removeAttribute("disabled");
  document.getElementById("steps2").setAttribute("disabled", true);
  document.getElementById("steps1").removeAttribute("disabled");
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document.images["mydice"].src = eval("face" + randomdice + ".src");
  horsePlayer2.throw = randomdice;
  board = new BoardCanvas();
  board.showCurrentPosition(horsePlayer1);
  horsePlayer2.doFinalSteps();
  board.showCurrentPosition(horsePlayer2);
  if (horsePlayer2.isTheWinner()) {
    board.gameOver(horsePlayer2.name);
  }
}
document.getElementById("player1").onclick = player1Plays;
document.getElementById("steps1").onclick = player1Steps;
document.getElementById("player2").onclick = player2Plays;
document.getElementById("steps2").onclick = player2Steps;

board = new BoardCanvas();
BoardCanvas.prototype.gameOver = function(name) {
  audio.pause();
  yeahSound.play();
  $("body").html(
    "<div id='gameOver'><h1>" +
      name +
      "</h1><div><img src='./images/awesome.png'></div></div>"
  );
};

//use keyboard to move the horses
var KEY_P = 80;
var KEY_M = 77;
var KEY_A = 65;
var KEY_Q = 81;

document.onkeydown = function(e) {
  if (
    e.keyCode === KEY_A &&
    !document.getElementById("player1").getAttribute("disabled")
  ) {
    player1Plays();
  } else if (
    e.keyCode === KEY_Q &&
    !document.getElementById("steps1").getAttribute("disabled")
  ) {
    player1Steps();
  } else if (
    e.keyCode === KEY_P &&
    !document.getElementById("player2").getAttribute("disabled")
  ) {
    player2Plays();
  } else if (
    e.keyCode === KEY_M &&
    !document.getElementById("steps2").getAttribute("disabled")
  ) {
    player2Steps();
  }
};
