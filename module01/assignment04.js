let house_idx = Math.floor(Math.random() * 4)
let house = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"][house_idx]
let fan_name = prompt("What is your name, oh Harry Potter fan?")
document.querySelector("#output").textContent = `${fan_name}, you are ${house}.`
