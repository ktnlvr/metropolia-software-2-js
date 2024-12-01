
function calculate() {
    const operation = document.getElementById('operation')

    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;

    let result = undefined;

    switch (operation.value) {
        case "add": {
            result = num1 + num2;
            break;
        }
        case "sub": {
            result = num1 - num2;
            break;
        }
        case 'multi': {
            result = num1 * num2;
            break
        }
        case 'div': {
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
