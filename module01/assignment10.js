amount = +prompt("Amount of dice")
sum = +prompt("Sum of dice")

N = 1000000
count = 0
for (let i = 0; i < N; i++) {
    let total = 0
    for (let j = 0; j < amount; j++)
        total += Math.floor(Math.random() * 6) + 1
    if (total === sum)
        count++;
}

document.querySelector("#output").textContent = `Probability to get sum ${sum} with ${amount} dice is ${(100 * count / N).toFixed(2)}%.`
