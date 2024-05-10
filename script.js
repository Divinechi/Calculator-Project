function appendToScreen(value) {
  document.querySelector('.screen').value += value;
}

function calculate() {
  var expression = document.querySelector('.screen').value;
  var result = eval(expression);
  document.querySelector('.screen').value = result;
}

