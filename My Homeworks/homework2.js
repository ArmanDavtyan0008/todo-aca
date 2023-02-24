// 1. Given two objects. Write a function that performs shallow compare.
// Input Output

// var a = { a: ‘1’ };
// var b = { a: ‘1’};
// shallowCompare(a, b)

// true

// var a = { a: ‘1’ };
// var b = { a: ‘1’, b: ‘2’ };
// shallowCompare(a, b)

// false

// var a = { };
// var b = { };
// shallowCompare(a, b)

// true 

function shallow(obj,obj1) {
    let result
      let value = []
        let value1 = []
          for (let key in obj) {
             value.unshift(key)
                value.push (obj[key])
                }
                  for (let prop in obj1) {
                    value1.unshift(prop)
                   value1.push(obj1[prop])
                 } for(let y = 0; y < value.length + value1.length; y++) {
              if (value[y] === value1[y] && obj[y++] === obj1[y++]) {
             result = true
         continue
        }    
      else {
     result = false 
    break
  }        
 }
     return result 
 }
   
 console.log (shallow ({ a: '1', b: '2' }, { a: '1', b: '1'}))
 

//  2. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//     word&quot;) is a word or phrase without a repeating letter.

      function checkTheWord(text) {
        let word = '' + text
          let newWord = []
            for (let i = 0; i <= text.length -1; i++) {
              for (let j = 1; j <= text.length ; j++) {
                if (word[i] === word[j]) {
                  newWord.unshift(word[i])
                }
                   else {
                    continue
                 }
               }
             }
           if (newWord.length -1 < word.length -1) {
         return 'The word is a isogram'
        }
      else {
    return 'The word is not a isogram'
   }
  }
      console.log (checkTheWord('palindrome'))
  

//  3. Given a number n ( n >= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
//         // 5, 8 …, ak = ak-1 + ak-2)

        function fibonacciNumbers(digit) {
           const array = [0,1]
            for (let i = 2 ; i < digit; i++) {
         array[i] = array[i-1] + array[i-2]
       }
    return array                   
  }
        console.log (fibonacciNumbers(5))







// 4. Insert a number. Calculate product and sum of the digits of the number. If product is
// divisible by the sum, print the quotient, otherwise print the remainder.


       function getDifference (number) {
         let stringified = '' + number
           let sumOfProduct = 1
             let sumOfDigits = 0 
               let result   
                 for (let i = 0; i < stringified.length;i++) {
                   sumOfProduct *= +stringified[i]
                     sumOfDigits += +stringified[i]
                  }
                        if (sumOfProduct / sumOfDigits % 2 === 0  ) {
                          result = `Quotient is ${sumOfProduct / sumOfDigits}`
                        }
                        else if (sumOfProduct % 2 !== 0) {
                    result = `Quotient is ${sumOfProduct / sumOfDigits}`
                   }
                else if (sumOfProduct === 0) {
             result = 'Cannot calculate.'
            }
          else {
         result = `Remainder is ${sumOfProduct % sumOfDigits } `
        }
    return result 
}
    
      console.log (getDifference (0))
    
    
// // task 5. Write a program to print X star pattern series. 

// // էս խնդրի վրա շատ եմ չարչարվել ավելի շատ ժամանակ խլեց քան արդյունք ա, բայց մեկա թերություններ մնացին , բացի այդ իմ մոտ run չի լինում չեմ հասկանում ինչի"

//        let obj = {
//         spaces : function (num) {
//           let str = ""
//            for (let i = 0; i < num;i++){
//              str += " "
//             }
//               return str
//            },
//                stars : function (num) {
//                   let str = ""
//                     for (let i = 0 ; i < num; i++ ) {
//                        str += '*'
//                   }
//                          return str 
//                   }
//                     }
//                           function printX(insert) {
//                              let result = ""
//                                 let str = ""
//                                    let number = insert
//                                       let newNumber = 1
//                                           let forSpace = 0
//                                             let forSpace2 = Math.ceil(insert / 2 -1)
//                                                for (let i = 0; i < insert ; i + 2) {
//                                              str += obj.spaces(forSpace) + obj.stars(number) + '\n'
//                                           number--
//                                         forSpace++
//                                       } 
      
//                                     for (let j = 2; j < insert; j + 2) { 
//                                 str += obj.spaces(forSpace2 -1) + obj.stars(newNumber) + '\n'
//                             newNumber++ 
//                        forSpace2 --
//                       }
//                    return result + str
//                  }
//  console.log (printX(5))
      