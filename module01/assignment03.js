ints = []

const N = 3
for (let i = 0; i < N; i++)
   ints.push(parseInt(prompt(`Enter ${String.fromCharCode('a'.charCodeAt(0) + i)}:`)))

document.querySelector("#sum").textContent = ints.reduce((a, b) => a + b, 0)
document.querySelector("#product").textContent = ints.reduce((a, b) => a * b, 1)
document.querySelector("#average").textContent = ints.reduce((a, b) => a + b / N, 0)
