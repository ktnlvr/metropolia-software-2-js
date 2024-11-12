let arr = [,,,,,]
for (let i = 0; i < arr.length; i++)
    arr[arr.length - i - 1] = +prompt("Enter number")
console.log(arr)
