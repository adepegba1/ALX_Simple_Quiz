const addition = (a, b) => {
  return a + b;
};
const subtraction = (a, b) => {
  return a - b;
};
const division = (a, b) => {
  return a / b;
};
const multiplication = (a, b) => {
  return a * b;
};

document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = addition(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value || 0);
  const number2 = parseFloat(document.getElementById("number2").value || 0);
  const result = subtraction(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiplication(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = division(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
