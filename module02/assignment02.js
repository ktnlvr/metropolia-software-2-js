number = +prompt("Number")
out = ""
for (let i = 0; i < number; i++) {
    out += `<li>${prompt(`User ${i + 1}`)}</li>`
}

document.querySelector("#users").innerHTML = out
