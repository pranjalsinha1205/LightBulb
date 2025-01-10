let bulb = document.getElementById("bulb");
let on = document.getElementById("on");
let off = document.getElementById("off");

function onBulb(){
    // on the bulb
    bulb.innerHTML = ``;
    bulb.innerHTML = `
        <button onclick=onBulb() id="on">Click to <strong>ON</strong> the bulb</button>
        <img src="bulbOn.png" alt="Bulb is on" title="Bulb is on" style="height: 60vh; width: 20vw;">
        <button onclick=offBulb() id="off">Click to <strong>OFF</strong> the bulb</button>
    `
}

function offBulb(){
    // off the bulb
    bulb.innerHTML = ``;
    bulb.innerHTML = `
        <button onclick=onBulb() id="on">Click to <strong>ON</strong> the bulb</button>
        <img src="bulbOff.png" alt="Bulb is off" title="Bulb is off" style="height: 60vh; width: 20vw;">
        <button onclick=offBulb() id="off">Click to <strong>OFF</strong> the bulb</button>
    `}