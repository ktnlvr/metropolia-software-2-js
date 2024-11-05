let out = document.querySelector("#years")
let intervalStart = parseInt(prompt("Interval start"))
let intervalEnd = parseInt(prompt("Interval end")) + 1
const isLeap = (year) => (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0)

for (let y = intervalStart; y <= intervalEnd; y++)
    if (isLeap(y)) {
        let li = document.createElement("li")
        li.textContent = y.toString()
        out.appendChild(li)
    }
