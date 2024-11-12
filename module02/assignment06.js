out = document.querySelector("#output")
// I think it looks better when it ends with a 6, because
// then it's obvious that it stops with a 6
let x;
do {
    x = Math.floor(Math.random() * 6) + 1;
    out.innerHTML += `<li>${x}</li>`
} while (x != 6)
