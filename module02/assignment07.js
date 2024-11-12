function roll(p, q) {
    sum = 0;
    for (let i = 0; i < q; i++)
        sum += Math.floor(Math.random() * p) + 1;
    return sum;
}

n = +prompt("How many sides?")
out = document.querySelector("#output")
let x;
do {
    x = roll(n, 1)
    out.innerHTML += `<li>${x}</li>`
} while(x != n)
