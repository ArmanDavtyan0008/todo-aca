// 1. Create an Author class and a Book class.

// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.

// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.

class Author {
    constructor(name, gender, email) {
        this.name = name
        this.gender = gender
        this.email = email
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (typeof value === "number") {
            alert("Cannot be accepted as a correct name");
            return;
        }
        this._name = value;
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }

    get gender() {
        return this._gender
    }

    set gender(value) {
        this._gender = value
    }

    toString() {
        return "This is class based method "
    }

}

isAuthor = new Author("Joseph", "male", "Campbell.yahoo.com")





class Book {
    constructor(author, price, quantity) {
        this.author = author
        this.price = price
        this.quantity = quantity
    }

    get author() {
        return this._author
    }

    set author(value) {
        this._author = value;
    }

    get price() {
        return this._price
    }

    set price(value) {
        this._price = value
    }

    get quantity() {
        return this._quantity
    }

    set quantity(value) {
        this._quantity = value
    }

    getProfit() {

        return this.price * this.quantity + "$"
    }

    toString() {
        return Book.constructor.name + ""
    }

}

myBook = new Book("Campbell", 15, 10000)








// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account {

    constructor(id, name, balance) {
        this.id = id
        this.name = name
        this.balance = balance
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }
    get balance() {
        return this._balance
    }

    set balance(value) {
        this._balance = value
    }

    get id() {
        return this._id
    }

    set id(value) {
        return this._id = value
    }

    credit(amount) {
        this._balance += amount
        return ` Your new balance is ${this._balance + " AMD"}`

    }

    debit(amount) {
        if (amount > this._balance) {
            return "Amount exceeded balance"
        }
        this._balance -= amount
        return `Your new balance is ${this._balance + " AMD"}`
    }

    transfer(anotherAccount, amount) {

        if (amount < this._balance) {
            console.log(`${amount + "AMD"} was  transfered from this account to ${anotherAccount + "'s"} account`)
            this._balance -= amount
            return ` Your new balance is  ${this._balance + " AMD"}`
        }
        return "Transaction exceeded balance"
    }

    MyToString(val) {
        return "" + val
    }


    balance1 = {
        currentBalance: 10000,
        pinCode: 4444
    }

    balance2 = {
        currentBalance: 20000,
        pinCode: 8888
    }


    static identifyAccount(balance1, balance2) {
        let keys1 = Object.values(balance1)
        let keys2 = Object.values(balance2)
        for (let key in keys1) {
            let filteredKey = key
            for (let Key in keys2) {
                if (filteredKey === Key) {
                    return `Same property is ${Key}`
                }

            }
        }
        return `There were no same properties`
    }
}


// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// // It should have a method: toString().
// // Student is inherited from Person. It should have program(array of strings), year, fee.
// // It should have appropriate getters and setters.
// // It should have method: passExam(program, grade). Student should contain the data
// // about its programs and exams. passExam will update that data, so if student passed all
// // the exams(grade is great or equal to 50), its year should be increased by one.
// // It should have a toString method.
// // Teacher is inherited from Person. It should have program(string), pay.
// // It should have appropriate getters and setters.
// // It should have a toString method.

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        this._firstName = value
    }
    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        this._lastName = value
    }

    get gender() {
        return this._gender
    }

    set gender(value) {
        this._gender = value
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value
    }

    myToString(value) {
        return "" + value
    }

}

class Student extends Person {
    constructor(program, year, fee, ...args) {
        super(...args)
        this._program = program
        this.year = year
        this.fee = fee
    }
    get year() {
        return this._year
    }

    set year(value) {
        this._year = value
    }
    get fee() {
        return this._fee
    }

    set fee(value) {
        this._fee = value
    }

    passExam() {
        let gradeCalculator = 0
        let num
        this._program.forEach((val) => {
            num = +prompt(` You are supposed to be lecture \n Put your mark for ${val} `, 0)
            gradeCalculator += num

        })

        if (gradeCalculator / this._program.length >= 50) {
            this._year += 1
            return `Congratulations you passed to the next course `
        } else {
            return `You remained in the same course `
        }
    }
}

Anahit = new Student(["Hermeneutics", "Geopolitics", "PR"], 7, 45000, "Anahit", "Sargsyan", "female", "25")


class Teacher extends Person {
    constructor(program, pay, ...args) {
        super(...args)
        this.program = program
        this.pay = pay

    }
    get program() {
        return this._program
    }

    set program(value) {
        this._program = value
    }

    get pay() {
        return this._pay
    }

    set pay(value) {
        this._pay = value
    }


    ToStringForTeacher(val) {
        return `this method is in the  ${this.constructor.name}` + ":" + " " + val
    }
}


teacher = new Teacher("To do", 50000, "Haykuhi", "Kirakosyan", "female", "35") 