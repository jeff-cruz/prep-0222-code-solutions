function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log('sum ' + sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hours = convertHoursToMinutes(2);
console.log(hours);

function getGreeting(name) {
  return name + (' World!');
}
var name = getGreeting('Hello');
console.log(name);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var product = addAndMultiplyBy5(10, 5);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var quotient = multiplyAndDivideBy5(35, 10);
console.log(quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return (radius * 2) * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var solution = cube(5);
console.log(solution);
