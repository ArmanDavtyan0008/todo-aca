// 1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.

let number = +prompt()
let newDigit = number % 10 
if (newDigit === 0) {
  result = number
} else {
  result = newNumber = "" + newDigit + (number / 10   ) - (number / 10  % 1)
       }
console.log (result)

// 2. Given three numbers. Sort them by the ascending order.

let num1 = 45
let num2 = 26
let num3 = 78
let result = num2 < num1 && num1 < num3 ? `${num2},${num1},${num3}`: 'Not correct'
console.log (result)

// 3. Given the following code rewrite it using only two if operators. (Hint: use logical
// operators).

let n = +prompt()
let i = 0
let j = 0
if (n % 2 === 0 && !Math.floor(n/10) === 0) {
  i += 1
}
if (n % 3 === 0 && n % 10 === 1) {
  j += 1
}

// 4. Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// // For the triangle entered numbers are height and and base.
// task4
let a = 5
let b = 6
let resul = a !== 0 && b !== 0 ? `"Square of the triangle is  ${a * b / 2}"`: "please enter only positives "
console.log (resul)

// 5. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.

function swapMap(map) {
    const invertedMap = {}
    for (const key in map) {
        const value = map[key]
        invertedMap[value] = invertedMap[value] || []
        invertedMap[value].push(key)
    }
    return invertedMap
}
console.log (swapMap({ a: '1', b: '2', c: '2', d: '2' }))