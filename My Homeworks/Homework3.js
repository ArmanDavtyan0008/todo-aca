// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

// Input Output
// [2, 12, 15, 48, 64] -1
// [-9, -4, -4, 3, 12, 4, 5] 5


function GetTheUnappropriateIndex(array) {
  let result
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      return `Violated index is ${array.indexOf(array[i + 1])}`
    }
    else {
      if (i === array.length - 1) {
        return -1
      }
    }

  }
}
console.log(GetTheUnappropriateIndex([-9, -4, -4, 3, 12, 4, 5]))





// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

// Input Output
// [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]----    [12, 1, 13, 15
// [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]] -----    [ 45, 8, 0, -6]
// [[1], [2], [3], [4]] -------   [1, 2, 3, 4]


function GetSumOfDeepArrays(arrays) {
  let newArray = []
  let sum = 0
  let altSum = 0
  for (let i = 0; i < arrays.length; i++) {
    let arr = arrays[i]
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j]
    }
    if (j = arr.length - 1 && sum === 0) {
      newArray.push(altSum)
    }
    else {
      newArray.push(sum)
      sum = 0
    }
  }
  return newArray
}
console.log(GetSumOfDeepArrays([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]))





// 3. Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length
// Input Output
// [5, 4, 78, 0, -3, 7] [15, -9, 21]
// [2, 4, 6, 88] []
// [[] []


function newArrayWithoutEvens(array) {
  let arrayOnlyOdds = []
  let newMulArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      arrayOnlyOdds.push(array[i])
    }
  }
  for (let j = 0; j < arrayOnlyOdds.length; j++) {
    newMulArray.push(arrayOnlyOdds[j] * arrayOnlyOdds.length)
  }
  return newMulArray
}
console.log(newArrayWithoutEvens([5, 4, 78, 0, -3, 7]))




// 4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.

// Input  Output

// 1 5 1 [1, 2, 3, 4, 5]
// 10 100 20 [10, 30, 50, 70, 90]
// 1 5 0.5 [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]


function arrayWithSteps(num, num1, num2) {
  let newArray = []
  for (let i = 0; i < 5; i++) {
    newArray.push(num)
    num += num2
  }
  return newArray
}
console.log(arrayWithSteps(10, 100, 20))





// 5. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)

// Input  Output

// [1, 1, 2, 2, 3] ---------1: 0.4, 2: 0.4, 3: 0.2

// [4, 4] ------------------4: 1

// [1, 2, 3] -------------- 1: 0.333333333333333,  2: 0.333333333333333 , 3: 0.3333333333333333


function getFrequencyofTheSameNumbers(array) {
  let newArray = []
  let sum = 1
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      if (j === array.length) {
        newArray.push(sum / array.length)
        sum = 0
      }
      else if (array[i] === array[i + 1]) {
        break
      }

      else if (array[i] === array[j]) {
        sum += 1
      }
    }
  }
  return newArray
}

console.log(getFrequencyofTheSameNumbers([1, 1, 2, 2, 3]))