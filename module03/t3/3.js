'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target')
for (let name of names) {
    let elem = document.createElement('li')
    elem.textContent = name
    target.appendChild(elem)
}
