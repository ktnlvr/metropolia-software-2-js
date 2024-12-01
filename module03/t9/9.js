function calculate() {
    const expr = document.getElementById("calculation").value
    const matches = expr.matchAll(/^([0-9]+)\s*([+-\/*])\s*([0-9]+)/g)

    const matched = []
    for (const match of matches)
        matched.push(match)

    let result = undefined;
    let num1 = +matched[0][1], num2 = +matched[0][3], op = matched[0][2];

    switch (op) {
        case "+": {
            result = num1 + num2;
            break;
        }
        case "-": {
            result = num1 - num2;
            break;
        }
        case '*': {
            result = num1 * num2;
            break
        }
        case '/': {
            if (num2 == 0)
                result = ':(';
            else
                result = num1 / num2;
            break;
        }
    }

    document.getElementById("result").textContent = result;
}

document.getElementById('start').onclick = calculate
