console.log("Hello World!")

class Calculator {
    constructor(prevOperandTextElement, curOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.curOperandTextElement = curOperandTextElement
        this.clear()
    }

    clear() {
        this.curOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.curOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.curOperand
        this.curOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.prevOperand)
        const cur = parseFloat(this.curOperand)
        if (isNaN(prev) || isNaN(cur)) return
        switch (this.operation) {
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case 'x':
                computation = prev * cur
                break
            case '÷':
                computation = prev / cur
                break
            default:
                return
        }
        this.curOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

    updateDisplay() {
        this.curOperandTextElement.innerText = this.curOperand
        this.prevOperandTextElement.innerText = this.prevOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperandTextElement = document.querySelector('[data-previous-operand]')
const curOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperandTextElement, curOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
}) 

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
}) 


// const ac = document.querySelector("#ac")
// const pm = document.querySelector("#pm")
// const divide = document.querySelector("#divide")
// const multiply = document.querySelector("#times")
// const subtract = document.querySelector("#sub")
// const add = document.querySelector("#add")
// const equals = document.querySelector("#equal")
// const zero = document.querySelector("#zero")
// const one = document.querySelector("#one")
// const two = document.querySelector("#two")
// const three = document.querySelector("#three")
// const four = document.querySelector("#four")
// const five = document.querySelector("#five")
// const six = document.querySelector("#six")
// const seven = document.querySelector("#seven")
// const eight = document.querySelector("#eight")
// const nine = document.querySelector("#nine")
// const dot = document.querySelector("#dot")

console.log(ac)

// ac.addEventListener("click", )
// pm.addEventListener("click")
// multiply.addEventListener("click")
// subtract.addEventListener("click")
// add.addEventListener("click")
// equals.addEventListener("click")
// zero.addEventListener("click")
// one.addEventListener("click")
// two.addEventListener("click")
// three.addEventListener("click")
// four.addEventListener("click")
// five.addEventListener("click")
// six.addEventListener("click")
// seven.addEventListener("click")
// eight.addEventListener("click")
// nine.addEventListener("click")
// dot.addEventListener("click")