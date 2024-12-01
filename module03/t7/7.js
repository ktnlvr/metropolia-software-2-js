let trigger = document.getElementById('trigger')
let target = document.getElementById('target')

trigger.onmouseover = () => target.src = "img/picB.jpg";
trigger.onmouseleave = () => target.src = "img/picA.jpg";
