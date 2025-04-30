let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num !== '.') display.value = num;
    else display.value += num;
}

function appendOperator(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = '0';
}

function deleteChar() {
    display.value = display.value.slice(0, -1) || '0';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result % 1 === 0 ? result : result.toFixed(2);
    } catch (error) {
        display.value = 'Error';
    }
}
