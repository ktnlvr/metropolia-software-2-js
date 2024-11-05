let out = document.querySelector("#output")
if (confirm("Should I calculate the square root?")) {
    let input = parseInt(prompt("Enter a number"));
    if (input < 0) {
        out.textContent = "Can't take a square root of a negative number";
        return;
    }

    out.textContent = Math.sqrt(input);
}
