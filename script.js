// let bulb = document.getElementById("bulb");

// function onBulb(){
//     // on the bulb
//     bulb.innerHTML = ``;
//     bulb.innerHTML = `
//         <button onclick=onBulb() id="on">Click to <strong>ON</strong> the bulb</button>
//         <img src="pic_bulbon.gif" alt="Bulb is on" title="Bulb is on">
//         <button onclick=offBulb() id="off">Click to <strong>OFF</strong> the bulb</button>
//     `
// }

// function offBulb(){
//     // off the bulb
//     bulb.innerHTML = ``;
//     bulb.innerHTML = `
//         <button onclick=onBulb() id="on">Click to <strong>ON</strong> the bulb</button>
//         <img src="pic_bulboff.gif" alt="Bulb is off" title="Bulb is off">
//         <button onclick=offBulb() id="off">Click to <strong>OFF</strong> the bulb</button>
//     `}

// let actionButton = document.getElementById("actionButton");
// let bulbDiv = document.getElementById("bulb");

// function bulbAction() {
//     if (actionButton.innerHTML === "ON") {
//         // Turn the bulb ON
//         bulbDiv.innerHTML = `
//             <img src="pic_bulbon.gif" alt="Bulb is on" title="Bulb is on">
//             <button onclick="bulbAction()" id="actionButton">OFF</button>
//         `;
//         actionButton.innerHTML = "OFF";
//     } else if (actionButton.innerHTML === "OFF"){
//         // Turn the bulb OFF
//         bulbDiv.innerHTML = `
//             <img src="pic_bulboff.gif" alt="Bulb is off" title="Bulb is off">
//             <button onclick="bulbAction()" id="actionButton">ON</button>
//         `
//         actionButton.innerHTML = "ON";
//         ;
//     }
// }

let actionButton = document.getElementById("actionButton");
let bulb = document.getElementById("bulb");
let para = document.getElementById("para");
let bodyEl = document.getElementById("bodyElement");

function bulbAction(){
    if (actionButton.innerHTML === "ON"){
        bodyEl.style.color = "black";
        bodyEl.style.backgroundColor = "white"; 
        para.innerHTML = `The bulb is <strong>ON</strong>`
        bulb.innerHTML = `<img src="pic_bulbon.gif" alt="Bulb is on" title="Bulb is on">`;
        actionButton.innerHTML = "OFF";
    }
    else if (actionButton.innerHTML === "OFF"){
        bodyEl.style.color = "white";
        bodyEl.style.backgroundColor = "#302F2F"; 
        para.innerHTML = `The bulb is <strong>OFF</strong>`
        bulb.innerHTML = `<img src="pic_bulboff.gif" alt="Bulb is off" title="Bulb is off">`;
        actionButton.innerHTML = "ON";
    }
}