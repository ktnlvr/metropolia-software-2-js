let year = prompt("Year:")
let isLeap = (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0)
let out = document.querySelector("#output")
if (isLeap)
    out.textContent = `${year} is a leap year.`
else
    out.textContent = `${year} is not a leap year`
