function Horse() {
  this.color = "blue";
  this.properties = {};
  this.currentPosition = [,];
  this.errorsLeft = 2;
  this.throw = 0;
}

Horse.prototype.chooseColor = function() {
  var colorIndex = prompt(
    "Please choose a color:\n 1: blue\n 2: yellow\n 3: red \n 4: green"
  );

  switch (colorIndex) {
    case "1":
      this.color = "blue";
      break;
    case "2":
      this.color = "yellow";
      break;
    case "3":
      this.color = "red";
      break;
    case "4":
      this.color = "green";
      break;
  }
};

Horse.prototype.defineMyHorse = function() {
  switch (this.color) {
    case "blue":
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
    case "yellow":
      this.properties = {
        startPosition: [342.5, 62.5],
        finalPosition: [302.5, 62.5],
        finalSteps: [
          [302.5, 102.5],
          [302.5, 142.5],
          [302.5, 182.5],
          [302.5, 222.5],
          [302.5, 342.5],
          [302.5, 302.5]
        ]
      };
      break;
    case "red":
      this.properties = {
        startPosition: [22.5, 382.5],
        finalPosition: [22.5, 342.5],
        finalSteps: [
          [62.5, 342.5],
          [102.5, 342.5],
          [142.5, 342.5],
          [182.5, 342.5],
          [222.5, 342.5],
          [342.5, 342.5]
        ]
      };
      break;
    case "green":
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

Horse.prototype.canStartPiece = function() {
  var test = true;
  if (this.throw === 6) {
    this.currentPosition = this.properties.startPosition;
  } else {
    test = false;
  }
  return test;
};

Horse.prototype.goBackToTheBeginning = function() {
  if (this.errorsLeft === 0) {
    this.currentPosition = this.properties.startPosition;
  }
};

Horse.prototype.canDoFinalSteps = function() {
  if (this.currentPosition == this.properties.finalPoint) {
    return true;
  } else {
    return false;
  }
};

Horse.prototype.doFinalSteps = function() {
  if (canDoFinalSteps()) {
    if (
      this.currentPosition[0] === this.properties.finalPosition[0] &&
      this.currentPosition[1] === this.properties.finalPosition[1]
    ) {
      if (this.throw === 1) {
        this.currentPosition = this.properties.finalSteps[0];
      }
    } else if (
      this.currentPosition[0] === this.properties.finalsteps[5][0] &&
      this.currentPosition[1] === this.properties.finalSteps[5][1]
    ) {
      if (this.throw === 6) {
        prompt("The " + this.color + " horse is the winner!!");
      }
    } else if (this.properties.finalSteps.includes(this.currentPosition)) {
      this.currentPosition = this.properties.finalSteps[this.throw - 1];
    }
  }
};

Horse.prototype.nextPosition = function() {
  if (
    this.currentPosition[1] === 302.5 &&
    this.currentPosition[0] !== 342.5 &&
    22.5
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[1] === 382.5 &&
    this.currentPosition[0] !== 262.5 &&
    582.5
  ) {
    this.currentPosition[0] += 40;
  } else if (
    this.currentPosition[0] === 262.5 &&
    this.currentPosition[1] !== 302.5 &&
    622.5
  ) {
    this.currentPosition[1] += 40;
  } else if (
    this.currentPosition[0] === 342.5 &&
    this.currentPosition[1] !== 62.5 &&
    382.5
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[0] === 342.5 &&
    this.currentPosition[1] === 62.5
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[0] === 302.5 &&
    this.currentPosition[1] === 62.5 &&
    this.currentPosition !== this.properties.startPosition
  ) {
    this.currentPosition[0] -= 40;
  } else if (
    this.currentPosition[0] === 22.5 &&
    this.currentPosition[1] === 302.5
  ) {
    this.currentPosition[1] += 40;
  } else if (
    this.currentPosition[0] === 22.5 &&
    this.currentPosition[1] === 342.5 &&
    this.currentPosition !== this.properties.startPosition
  ) {
    this.currentPosition[1] += 40;
  } else if (
    this.currentPosition[0] === 262.5 &&
    this.currentPosition[1] === 622.5
  ) {
    this.currentPosition[0] += 40;
  } else if (
    this.currentPosition[0] === 302.5 &&
    this.currentPosition[1] === 622.5 &&
    this.currentPosition !== this.properties.startPosition
  ) {
    this.currentPosition[0] += 40;
  } else if (
    this.currentPosition[1] === 382.5 &&
    this.currentPosition[0] === 582.5
  ) {
    this.currentPosition[1] -= 40;
  } else if (
    this.currentPosition[1] === 342.5 &&
    this.currentPosition[0] === 582.5 &&
    this.currentPosition !== this.properties.startPosition
  ) {
    this.currentPosition[1] -= 40;
  }
};
