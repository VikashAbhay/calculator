let input = document.getElementById("result");

function addNumber(num) {
  if (input.value === "0") {
    input.value = num;
  } else {
    input.value += num;
  }
}

function addOperator(operator) {
  input.value += operator;
}

function addDecimal() {
  if (input.value.indexOf(".") === -1) {
    input.value += ".";
  }
}

function clearResult() {
  input.value = "0";
}

function backspace() {
  let value = input.value;
  input.value = value.substr(0, value.length - 1);
}

function calculate() {
  input.value = eval(input.value);
}
