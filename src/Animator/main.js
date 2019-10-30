import Configuration from "../Configuration/configuration.js";
import Drop from "../Classes/drop.js";

let drop = [Configuration.dropLength];

function refresh() {
  Configuration.context.fillStyle = Configuration.backgroundColor;
  Configuration.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function draw() {
  for (let i = 0; i < drop.length; i++) {
    Configuration.context.beginPath();
    Configuration.context.moveTo(drop[i].initPositionX, drop[i].initPositionY);
    Configuration.context.lineTo(drop[i].endPositionX, drop[i].endPositionY);
    Configuration.context.strokeStyle = drop[i].color;
    Configuration.context.stroke();
    drop[i].initPositionY += drop[i].fallVelocity;
    drop[i].endPositionY += drop[i].fallVelocity;
    drop[i].initPositionX += drop[i].windVelocity;
    drop[i].endPositionX += drop[i].windVelocity;
    if (
      drop[i].initPositionY > window.innerHeight ||
      drop[i].initPositionX >= window.innerWidth ||
      drop[i].initPositionX <= 0
    ) {
      resetPosition(drop[i]);
    }
  }
}

function update() {
  Configuration.context.lineWidth = Configuration.dropSize;
  Configuration.context.lineCap = Configuration.dropCap;
  refresh();
  draw();
  window.requestAnimationFrame(update);
}

function resetPosition(drop) {
  drop.fallVelocity = Math.random() * 5 + 3;
  drop.windVelocity = Math.random() * 2;
  drop.windVelocity *= Math.random() * 10 > 5 ? -1 : 1;
  drop.initPositionX = Math.random() * window.innerWidth;
  drop.initPositionY = 0;
  drop.endPositionX = drop.initPositionX + drop.windVelocity;
  drop.endPositionY = 9;
  drop.color =
    "rgb(" +
    getRandomInt(0, 250) +
    "," +
    getRandomInt(0, 250) +
    "," +
    getRandomInt(0, 250) +
    ")";
}

function initDrops() {
  for (let i = 0; i < Configuration.dropLength; i++) {
    drop[i] = new Drop();
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function run() {
  initDrops();
  requestAnimationFrame(update);
}

export default run;
