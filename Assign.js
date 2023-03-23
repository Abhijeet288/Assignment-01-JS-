var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var divisibleBy3 = [];

for (var i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    divisibleBy3.push(numbers[i]);
  }
}
console.log(divisibleBy3);