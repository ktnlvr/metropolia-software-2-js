numbers = []
let x;
while (x = +prompt())
    numbers.push(x)
numbers.sort((a, b) => a - b)
numbers.reverse()
console.log(numbers)