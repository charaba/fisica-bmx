const simCanvas = document.getElementById('simulation-canvas'),
      simCtx = simCanvas.getContext('2d'),
      energyGraph = document.getElementById('energy-graph'),
      graphCtx = energyGraph.getContext('2d'),
      kineticEnergyText = document.getElementById('kinetic-energy-text'),
      potentialEnergyText = document.getElementById('potential-energy-text'),
      totalEnergyText = document.getElementById('total-energy-text'),
      gravityInput = document.getElementById('gravity'),
      gravityValueDisplay = document.getElementById('gravity-value'),
      minSpeedInput = document.getElementById('min-speed'),
      minSpeedValueDisplay = document.getElementById('min-speed-value');

let g = parseFloat(gravityInput.value);

const bikeImg = new Image();
bikeImg.src = "images/bike.svg";
const bike = {
  x: 0,             
  y: 0,             
  mass: 70,
  rotation: 0,
  totalEnergy: 0,   
  extraSpeed: 0,    
  simSpeed: 0       
};

let simAnimationFrame,
    draggingBike = false,
    scenarioWidth = 12,
    lastTime = null,
    simRunning = false;

function resizeCanvas() {
  simCanvas.width = window.innerWidth * 0.8;
  simCanvas.height = window.innerHeight * 0.8;
  energyGraph.width = 300;
  energyGraph.height = 150;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

gravityInput.addEventListener('input', () => {
  g = parseFloat(gravityInput.value);
  gravityValueDisplay.textContent = gravityInput.value;
});

minSpeedInput.addEventListener('input', () => {
  minSpeedValueDisplay.textContent = minSpeedInput.value;
});

simCanvas.addEventListener('mousedown', e => {
  const rect = simCanvas.getBoundingClientRect(),
        scaleX = simCanvas.width / scenarioWidth,
        scaleY = simCanvas.height / 10,
        offsetY = simCanvas.height * 0.8,
        mouseX = e.clientX - rect.left,
        mouseY = e.clientY - rect.top,
        bikeCanvasX = bike.x * scaleX,
        bikeCanvasY = offsetY - bike.y * scaleY;
  if (Math.hypot(mouseX - bikeCanvasX, mouseY - bikeCanvasY) < 30) {
    draggingBike = true;
    bike.simSpeed = 0;
  }
});
simCanvas.addEventListener('mousemove', e => {
  if (draggingBike) {
    const rect = simCanvas.getBoundingClientRect(),
          scaleX = simCanvas.width / scenarioWidth,
          scaleY = simCanvas.height / 10,
          offsetY = simCanvas.height * 0.8;
    bike.x = (e.clientX - rect.left) / scaleX;
    bike.y = (offsetY - (e.clientY - rect.top)) / scaleY;
  }
});
simCanvas.addEventListener('mouseup', () => draggingBike = false);
simCanvas.addEventListener('mouseleave', () => draggingBike = false);

function rampFunc(x) {
  return 1.5 * Math.sin(1 + 0.5 * x) * (x >= 0 ? 1 : 0);
}

function derivativeOf(f, x) {
  let h = 0.0001;
  return (f(x + h) - f(x)) / h;
}

function simLoop(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const dt = (timestamp - lastTime) / 1000;
  lastTime = timestamp;
  
  let slope = derivativeOf(rampFunc, bike.x),
      angle = Math.atan(slope),
      acceleration = -g * Math.sin(angle);
  
  bike.simSpeed += acceleration * dt;
  
  let effectiveSpeed = bike.simSpeed + bike.extraSpeed;
  
  bike.x += effectiveSpeed * Math.cos(angle) * dt;
  bike.y = rampFunc(bike.x);
  
  const h_min = -1.5,
        potentialEnergy = Math.max(bike.mass * g * (bike.y - h_min), 0),
        kineticEnergy = Math.max(bike.totalEnergy - potentialEnergy, 0);
  
  kineticEnergyText.textContent = "Cinética: " + kineticEnergy.toFixed(2) + " J";
  potentialEnergyText.textContent = "Potencial: " + potentialEnergy.toFixed(2) + " J";
  totalEnergyText.textContent = "Total (Mecânica): " + (kineticEnergy + potentialEnergy).toFixed(2) + " J";
  
  updateEnergyGraph(bike.x, kineticEnergy, potentialEnergy, 0, kineticEnergy + potentialEnergy);
  drawScene();
  
  if (simRunning) simAnimationFrame = requestAnimationFrame(simLoop);
}

function drawScene() {
  simCtx.clearRect(0, 0, simCanvas.width, simCanvas.height);
  const scaleX = simCanvas.width / scenarioWidth,
        scaleY = simCanvas.height / 10,
        offsetY = simCanvas.height * 0.8;
  const toCanvasX = xm => (xm - bike.x + scenarioWidth / 2) * scaleX;
  const toCanvasY = ym => offsetY - ym * scaleY;
  
  simCtx.strokeStyle = "#FFA500";
  simCtx.lineWidth = 3;
  simCtx.beginPath();
  simCtx.moveTo(toCanvasX(0), toCanvasY(rampFunc(0)));
  for (let x = Math.max(0, bike.x - scenarioWidth / 2); x <= bike.x + scenarioWidth / 2; x += 0.1) {
    simCtx.lineTo(toCanvasX(x), toCanvasY(rampFunc(x)));
  }
  simCtx.stroke();
  
  simCtx.save();
  simCtx.translate(toCanvasX(bike.x), toCanvasY(bike.y));
  simCtx.drawImage(bikeImg, -25, -25, 50, 50);
  simCtx.restore();
}

function updateEnergyGraph(pos, Ek, Ep, Eth, Em) {
  graphCtx.clearRect(0, 0, energyGraph.width, energyGraph.height);
  const maxVal = bike.totalEnergy,
        barWidth = energyGraph.width / 4,
        kHeight = (Ek / maxVal) * energyGraph.height,
        pHeight = (Ep / maxVal) * energyGraph.height,
        tHeight = (Em / maxVal) * energyGraph.height;
  
  graphCtx.fillStyle = "green";
  graphCtx.fillRect(barWidth * 0.5, energyGraph.height - kHeight, barWidth, kHeight);
  graphCtx.fillStyle = "#EEE";
  graphCtx.font = "12px Arial";
  graphCtx.fillText("K", barWidth * 0.5 + barWidth / 2 - 4, energyGraph.height - kHeight - 5);
  
  graphCtx.fillStyle = "blue";
  graphCtx.fillRect(barWidth * 1.5, energyGraph.height - pHeight, barWidth, pHeight);
  graphCtx.fillStyle = "#EEE";
  graphCtx.fillText("P", barWidth * 1.5 + barWidth / 2 - 4, energyGraph.height - pHeight - 5);
  
  graphCtx.fillStyle = "yellow";
  graphCtx.fillRect(barWidth * 2.5, energyGraph.height - tHeight, barWidth, tHeight);
  graphCtx.fillStyle = "#222";
  graphCtx.fillText("T", barWidth * 2.5 + barWidth / 2 - 4, energyGraph.height - tHeight - 5);
}

document.getElementById('exit-game-btn').addEventListener('click', () => {
  simRunning = false;
  cancelAnimationFrame(simAnimationFrame);
  document.getElementById('minigame-overlay').classList.remove('visible');
  const info = document.getElementById('rampa-info');
  if (info) info.remove();
});

function makeDraggable(container) {
  const dragBar = container.querySelector('.drag-bar');
  let offsetX = 0, offsetY = 0, isDown = false;
  dragBar.addEventListener('mousedown', e => {
    isDown = true;
    offsetX = e.clientX - container.offsetLeft;
    offsetY = e.clientY - container.offsetTop;
  });
  document.addEventListener('mousemove', e => {
    if (isDown) {
      container.style.left = (e.clientX - offsetX) + 'px';
      container.style.top = (e.clientY - offsetY) + 'px';
    }
  });
  document.addEventListener('mouseup', () => isDown = false);
}

makeDraggable(document.getElementById('sim-controls'));
makeDraggable(document.getElementById('energy-graph-container'));

function startSimulation() {
  bike.x = (Math.PI / 2 - 1) * 2;
  bike.y = rampFunc(bike.x); 
  
  bike.extraSpeed = parseFloat(minSpeedInput.value);
  g = parseFloat(gravityInput.value);
  const h_min = -1.5;
  bike.totalEnergy = 0.5 * bike.mass * (bike.extraSpeed ** 2) +
                     bike.mass * g * (bike.y - h_min);
  bike.simSpeed = 0;
  lastTime = null;
  simRunning = true;
  simAnimationFrame = requestAnimationFrame(simLoop);
  
  if (!document.getElementById('rampa-info')) {
    const rampaInfo = document.createElement('div');
    rampaInfo.id = 'rampa-info';
    rampaInfo.style.position = 'fixed';
    rampaInfo.style.bottom = '20px';
    rampaInfo.style.left = '60px';
    rampaInfo.style.zIndex = '10000';
    rampaInfo.style.color = '#EEE';
    rampaInfo.style.background = 'rgba(0, 0, 0, 0.75)';
    rampaInfo.style.padding = '20px';
    rampaInfo.style.fontSize = '18px';
    rampaInfo.style.maxWidth = '400px';
    rampaInfo.style.borderRadius = '8px';
    rampaInfo.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    rampaInfo.innerHTML =
      "<h3 style=\"text-align:center; color:#FFA500;\">Rampa</h3>" +
      "<br>" +
      "E<sub>total</sub> = E<sub>cinética</sub> + E<sub>potencial</sub><br>" +
      "E<sub>cinética</sub> = ½ m v²<br>" +
      "E<sub>potencial</sub> = m·g·h<br>" +
      "<br>" +
      "<p>Para que a bike suba a rampa, é necessário manter um valor mínimo de energia cinética (Velocidade Extra). Esse valor é definido no reset.</p>";
    document.body.appendChild(rampaInfo);
  }
}

document.getElementById('reset-bike-btn').addEventListener('click', () => {
  bike.x = (Math.PI / 2 - 1) * 2;
  bike.y = rampFunc(bike.x);
  bike.extraSpeed = parseFloat(minSpeedInput.value);
  bike.simSpeed = 0;
});
