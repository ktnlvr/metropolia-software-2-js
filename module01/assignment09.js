function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}

let n = parseInt(prompt("Number?"))
document.querySelector("#output").textContent = `${n} is ` + ["", "not "][+!isPrime(n)] + "prime"
