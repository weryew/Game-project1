var center = [302.5, 342.5];
function Horse() {
  this.start = false;
  this.color = "";
  this.name = "";
  this.properties = {};
  this.currentPosition = [,];
  this.throw = 0;
  this.image = horse1;
}

Horse.prototype.chooseColorAndName = function() {
  this.name = prompt("What's your name?");
  var colorIndex = prompt(
    "Choose a color:\n 1: blue\n 2: yellow\n 3: red \n 4: green"
  );
  while (colorIndex < 1 || colorIndex > 4) {
    colorIndex = prompt(
      "Your color is not defined!\n Please choose another color:\n 1: blue\n 2: yellow\n 3: red \n 4: green"
    );
  }

  switch (colorIndex) {
    case "1":
      this.color = "#4b98ce";
      break;
    case "2":
      this.color = "#fdff0d";
      break;
    case "3":
      this.color = "#ff4108";
      break;
    case "4":
      this.color = "#99d50e";
      break;
  }
};

Horse.prototype.defineMyHorse = function() {
  switch (this.color) {
    case "#4b98ce":
      this.properties = {
        startPosition: [582.5, 302.5],
        finalPosition: [582.5, 342.5],
        finalSteps: [
          [542.5, 342.5],
          [502.5, 342.5],
          [462.5, 342.5],
          [422.5, 342.5],
          [382.5, 342.5],
          [342.5, 342.5]
        ]
      };
      break;
    case "#fdff0d":
      this.properties = {
        startPosition: [262.5, 62.5],
        finalPosition: [302.5, 62.5],
        finalSteps: [
          [302.5, 102.5],
          [302.5, 142.5],
          [302.5, 182.5],
          [302.5, 222.5],
          [302.5, 262.5],
          [302.5, 302.5]
        ]
      };
      break;
    case "#ff4108":
      this.properties = {
        startPosition: [22.5, 382.5],
        finalPosition: [22.5, 342.5],
        finalSteps: [
          [62.5, 342.5],
          [102.5, 342.5],
          [142.5, 342.5],
          [182.5, 342.5],
          [222.5, 342.5],
          [262.5, 342.5]
        ]
      };
      break;
    case "#99d50e":
      this.properties = {
        startPosition: [342.5, 622.5],
        finalPosition: [302.5, 622.5],
        finalSteps: [
          [302.5, 582.5],
          [302.5, 542.5],
          [302.5, 502.5],
          [302.5, 462.5],
          [302.5, 422.5],
          [302.5, 382.5]
        ]
      };
      break;
  }
};

Horse.prototype.canStartPiece = function(name) {
  var test = true;
  if (this.throw === 6) {
    $(".text").html("<p>" + this.name + ", you can move now!</p>");
    this.currentPosition = this.properties.startPosition;
  } else {
    test = false;
    $(".text").html(
      "<p>" +
        this.name +
        ", you should throw 6.." +
        name +
        " it's your turn!</p>"
    );
  }
  return test;
};

Horse.prototype.doNextStep = function() {
  if (
    this.currentPosition[1] === 302.5 &&
    this.currentPosition[0] !== 342.5 &&
    this.currentPosition[0] !== 22.5
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[1] === 382.5 &&
    this.currentPosition[0] !== 262.5 &&
    this.currentPosition[0] !== 582.5
  ) {
    this.currentPosition[0] += 40;
  } else if (
    this.currentPosition[0] === 262.5 &&
    this.currentPosition[1] !== 302.5 &&
    this.currentPosition[1] !== 622.5
  ) {
    this.currentPosition[1] += 40;
  } else if (
    this.currentPosition[0] === 342.5 &&
    this.currentPosition[1] !== 62.5 &&
    this.currentPosition[1] !== 382.5
  ) {
    this.currentPosition[1] -= 40;
  } else if (
    this.currentPosition[0] === 342.5 &&
    this.currentPosition[1] === 62.5
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[0] === 302.5 &&
    this.currentPosition[1] === 62.5
    // this.currentPosition.toString() !== this.properties.startPosition.toString()
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[0] === 22.5 &&
    this.currentPosition[1] === 302.5
  ) {
    this.currentPosition[1] += 40;
  } else if (
    this.currentPosition[0] === 22.5 &&
    this.currentPosition[1] === 342.5
    //this.currentPosition.toString() !== this.properties.startPosition.toString()
  ) {
    this.currentPosition[1] += 40;
  } else if (
    this.currentPosition[0] === 262.5 &&
    this.currentPosition[1] === 622.5
  ) {
    this.currentPosition[0] += 40;
  } else if (
    this.currentPosition[0] === 302.5 &&
    this.currentPosition[1] === 622.5
    //this.currentPosition.toString() !== this.properties.startPosition.toString()
  ) {
    this.currentPosition[0] += 40;
  } else if (
    this.currentPosition[1] === 382.5 &&
    this.currentPosition[0] === 582.5
  ) {
    this.currentPosition[1] -= 40;
  } else if (
    this.currentPosition[1] === 342.5 &&
    this.currentPosition[0] === 582.5
    //this.currentPosition.toString() !== this.properties.startPosition.toString()
  ) {
    this.currentPosition[1] -= 40;
  }
};

Horse.prototype.moveForward = function() {
  var i = 0;
  while (
    this.currentPosition.toString() !==
      this.properties.finalPosition.toString() &&
    i < this.throw
  ) {
    this.doNextStep();
    i++;
  }
};

Horse.prototype.doFinalSteps = function() {
  if (
    this.currentPosition.toString() ===
      this.properties.finalPosition.toString() &&
    this.throw === 1
  ) {
    this.currentPosition = this.properties.finalSteps[0];
  } else if (
    this.currentPosition.toString() ===
      this.properties.finalSteps[0].toString() &&
    this.throw === 2
  ) {
    this.currentPosition = this.properties.finalSteps[1];
  } else if (
    this.currentPosition.toString() ===
      this.properties.finalSteps[1].toString() &&
    this.throw === 3
  ) {
    this.currentPosition = this.properties.finalSteps[2];
  } else if (
    this.currentPosition.toString() ===
      this.properties.finalSteps[2].toString() &&
    this.throw === 4
  ) {
    this.currentPosition = this.properties.finalSteps[3];
  } else if (
    this.currentPosition.toString() ===
      this.properties.finalSteps[3].toString() &&
    this.throw === 5
  ) {
    this.currentPosition = this.properties.finalSteps[4];
  } else if (
    this.currentPosition.toString() ===
      this.properties.finalSteps[4].toString() &&
    this.throw === 6
  ) {
    this.currentPosition = this.properties.finalSteps[5];
  } else if (
    this.currentPosition.toString() ===
      this.properties.finalSteps[5].toString() &&
    this.throw === 6
  ) {
    this.currentPosition = center;
  }
};

Horse.prototype.canKickThePlayer = function(horse) {
  return this.currentPosition.toString() === horse.currentPosition.toString();
};

Horse.prototype.isTheWinner = function() {
  return (
    this.throw === 6 && this.currentPosition.toString() === center.toString()
  );
};
