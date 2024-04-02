const display = document.querySelector('.calculator-input');
const calculatorKeys = document.querySelectorAll('.calculator-keys');
const operator = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');


function updateDisplay(value) {
    display.value += value;
    console.log(value);
}


function NumberClick(event) {
    updateDisplay(event.target.value);
    console.log('okay', event.target);
}


for(let i of calculatorKeys){
    i.addEventListener('click', NumberClick)
}

function clearDisplay() {
    display.value = ""
}
deleteButton.addEventListener('click', clearDisplay)




function operate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;
  
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      default:
        result = 'Invalid operator';
    }
  
    document.getElementById('result').value = result;
  }

  function add(num1, num2) {
    return num1 + num2;
  }
  
  function operate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = add(num1, num2);
    document.getElementById('result').value = result;
  }