let dice_count = parseInt(prompt("How many dice to roll?"))
let dice_sum = 0
for (let i = 0; i < dice_count; i++)
    dice_sum += Math.round(Math.random() * 6) + 1;

console.log(`Dice total for ${dice_count}d6: ${dice_sum}`)
