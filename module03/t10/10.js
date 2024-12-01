const target = document.getElementById('target');
const inputs = document.querySelectorAll('input');

const form = document.getElementById('source')
form.onsubmit = (e) => {
    e.preventDefault();
    let name = "Your name is";
    for (const input of inputs)
        name += ' ' + input.value;
    target.textContent = name
}
