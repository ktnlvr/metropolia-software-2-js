let out = document.querySelector("#output")
if (confirm("Should I calculate the square root?")) {
    let input = +prompt("Enter a number");
    if (input < 0) {
        out.textContent = "Can't take a square root of a negative number";
    } else {
        out.textContent = Math.sqrt(input);
    }
} else {
    out.textContent = "The square root is not calculated."
}
