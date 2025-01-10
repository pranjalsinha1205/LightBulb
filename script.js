let bulb = document.getElementById("bulb");
let on = document.getElementById("on");
let off = document.getElementById("off");

function onBulb(){
    // on the bulb
    bulb.innerHTML = ``;
    bulb.innerHTML = `
        <button onclick=onBulb() id="on">Click to <strong>ON</strong> the bulb</button>
        <img src="pic_bulbon.gif" alt="Bulb is on" title="Bulb is on">
        <button onclick=offBulb() id="off">Click to <strong>OFF</strong> the bulb</button>
    `
}

function offBulb(){
    // off the bulb
    bulb.innerHTML = ``;
    bulb.innerHTML = `
        <button onclick=onBulb() id="on">Click to <strong>ON</strong> the bulb</button>
        <img src="pic_bulboff.gif" alt="Bulb is off" title="Bulb is off">
        <button onclick=offBulb() id="off">Click to <strong>OFF</strong> the bulb</button>
    `}