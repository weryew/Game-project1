var horsePlayer1, horsePlayer2;
var colors = ["blue", "green", "red", "yellow"];

document.getElementById("start-game-button").onclick = function() {
  horsePlayer1 = new Horse();
  horsePlayer2 = new Horse();
  horsePlayer1.chooseColor();
  horsePlayer2.chooseColor();
  horsePlayer1.defineMyHorse();
  horsePlayer2.defineMyHorse();
  horsePlayer1.canStartPiece();
  horsePlayer2.canStartPiece();
};

function BoardCanvas() {
  this.ctx = document.getElementById("canvas").getContext("2d");
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
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(360 + i * 40, 342.5);
    this.ctx.arc(345 + i * 40, 342.5, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(317.5, 65 + i * 40);
    this.ctx.arc(302.5, 65 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "yellow";
    this.ctx.fill();
    this.ctx.stroke();
  }
  for (var i = 0; i < 7; i++) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(317.5, 385 + i * 40);
    this.ctx.arc(302.5, 385 + i * 40, 15, 0, Math.PI * 2, true);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.stroke();
  }
};

BoardCanvas.prototype.showCurrentPosition = function(horse) {
  this.ctx.beginPath();
  this.ctx.lineWidth = 1;
  this.ctx.moveTo(horse.currentPosition[0] + 15, horse.currentPosition[1]);
  this.ctx.arc(
    horse.currentPosition[0],
    horse.currentPosition[1],
    15,
    0,
    Math.PI * 2,
    true
  );
  this.ctx.fillStyle = horse.color;
  this.ctx.fill();
  this.ctx.stroke();
};

//creat the Dice
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

document.getElementById("player1").onclick = function() {
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document.images["mydice"].src = eval("face" + randomdice + ".src");
  horsePlayer1.throw = randomdice;
};
document.getElementById("player2").onclick = function() {
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document.images["mydice"].src = eval("face" + randomdice + ".src");
  horsePlayer2.throw = randomdice;
};
board = new BoardCanvas();
