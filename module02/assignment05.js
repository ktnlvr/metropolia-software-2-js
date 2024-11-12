numbers = []
let x;
while (!numbers.includes(x = +prompt()))
    numbers.push(x)
console.log(`Number ${x} has already been entered!`)
