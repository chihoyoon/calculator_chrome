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
        if (button[i] !== result && button[i] !== clearElement && button[i] !== allClear) {
            monitor.append(value);
        }
        if (button[i] === result) {
            let _result = eval(monitor.innerText);
            monitorResult.innerText = "";
            monitorResult.append(_result); 
        }
    
        if (button[i] === allClear) {
            monitor.innerText = "";
            monitorResult.innerText = "";    
        }
    
        if (button[i] === clearElement) { 
            let delLastStr = monitor.innerText.substr(0,monitor.innerText.length-1);
            monitor.innerText = "";
            monitor.append(delLastStr);
            monitorResult.innerText = ""; 
        }       
             
    })
}
    
