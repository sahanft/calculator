function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function calculatePercentage() {
    var expression = document.getElementById('display').value;
    var lastOperatorIndex = expression.search(/[\+\-\*\/]([^\/])*/g);
    var lastNumber = parseFloat(expression.substring(lastOperatorIndex + 1));
    var result = lastNumber / 100;
    document.getElementById('display').value = result;
}
