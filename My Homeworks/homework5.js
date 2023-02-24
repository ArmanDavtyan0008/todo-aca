
// 1. Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)
// Input Output
// [6, 78, ‘n’, 0, 1] ----------------------[78, ‘n’, 0, 1]
// [5] ------------------------------------ []
// []-------------------------------------- []


let i = 1
let newArray = []
function newAssignedArray(someArray) {
    newArray.push(someArray[i])
    i += 1
    if (i !== someArray.length && someArray.length !== 0 && someArray.length !== 1) {
        newAssignedArray(someArray)
    } else {
        return newArray
    }
    return newArray
}
console.log(newAssignedArray([6, 78, 'n', 0, 1]))



// 2. Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).

// Input Output
// [1, [3, 4, [1, 2]], 10] ----------------------------------------------[1, 3, 4, 1, 2, 10]
// [14, [1, [[[3, []]], 1], 0] ----------------------------------------- [14, 1, 3, 1, 0]


let newFlattenedArray = []
function getFlattened(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            getFlattened(nestedArray[i])
        } else {
            newFlattenedArray.push(nestedArray[i])
        }
    }
    return newFlattenedArray
}
console.log(getFlattened([14, [1, 2, [[[[2]]], 1], 0,]]))



// 3. Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

// Input Output
// 14------------ ---5
// 29 ---------------2
// 999999999999 -----9


function sumOfDigits(num) {
    let changingNum = '' + num
    let result = 0
    let newResult = 0
    let stringfiedResult = ''
    if (changingNum.length > 0) {
        for (let i = 0; i < changingNum.length; i++) {
            result += +changingNum[i]
        }
        stringfiedResult += result
        for (let j = 0; j < stringfiedResult.length; j++) {
            newResult += +stringfiedResult[j]
        }
    } else {
        return +changingNum
    }
    return newResult
}
console.log(sumOfDigits(999999999999))




// 4. Given the list of the following readers:
// [
// { book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
// { book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
// { book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
// { book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
// { book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
// { book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
// ];
// Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.

let array = [
    { book: 'quot Catcher in the Rye&quot', readStatus: true, percent: 40 },
    { book: 'quot Animal Farm&quot', readStatus: true, percent: 20 },
    { book: 'quot Solaris&quot', readStatus: false, percent: 90 },
    { book: 'quot The Fall&quot', readStatus: true, percent: 50 },
    { book: 'quot White Nights&quot', readStatus: false, percent: 60 },
    { book: 'quot After Dark&quot', readStatus: true, percent: 70 }
]
newFilteredArray = array.filter(el => el.readStatus === true).sort((a, b) => a.percent - b.percent).map(el => ({
    book: el.book, readStatus: el.readStatus, percent: el.percent + '%'
}))
console.log(newFilteredArray)