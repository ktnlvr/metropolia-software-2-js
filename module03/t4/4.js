'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target')
for (let { id, name } of students) {
  let elem = document.createElement("option");
  elem.value = id
  elem.textContent = name
  target.appendChild(elem)
}
