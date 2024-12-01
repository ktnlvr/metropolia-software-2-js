// well, this assumes that the button is alone on the page
// i am not sure if we are allowed to modify the HTML
// but the handler can be attached directly, like
// <button onclick="alert('Button Clicked')">Click me</button>

document.querySelector('button').onclick = () => alert("Button Clicked");
