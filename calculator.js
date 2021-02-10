"use strict";

let monitor = document.querySelector('#monitor');
let monitorResult = document.querySelector('#monitorResult');
let allClear = document.querySelector('#allClear');
let clearElement = document.querySelector('#clearElement');
let button = document.querySelectorAll('.button');
let result = document.querySelector('#result')


for (let i = 0; i < button.length; i++) {
    let value = button[i].getAttribute("value");
    button[i].addEventListener('click', () => {
        monitor.append(value);
    })
     
}
