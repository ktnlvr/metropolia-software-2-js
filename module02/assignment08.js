function concat(strings) {
    out = ""
    for (let x of strings)
        out += x
    return out
}

document.querySelector("#output").textContent = concat(["Johnny", "DeeDee", "Joey", "Marky"])
