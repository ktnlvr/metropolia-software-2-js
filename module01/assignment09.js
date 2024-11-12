function isPrime(n) {
    for (let i = 2; i < Math.ceil(Math.round(n)); i++)
        if (n % i == 0) {
            console.log(n)
            return true;
        }
    return n < 2;
}

let n = parseInt(prompt("Number?"))
document.querySelector("#output").textContent = `${n} is ` + ["", "not "][+isPrime(n)] + "prime"
