let house_idx = Math.round(Math.random() * 3)
let house = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"][house_idx]
let fan_name = prompt("What is your name, oh Harry Potter fan?")
document.querySelector("#output").textContent = `${fan_name}, you are ${house}.`
