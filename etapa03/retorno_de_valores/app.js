// Retornando valores

const double = function (number = 0) {
  return number * 2
}

console.log(double(3))
console.log(double(3) + 4)

const result = double(5)

console.log(result * 5)

const showResult = function (value) {
  return `O resultado é: ${value}`
}

console.log(showResult(result))