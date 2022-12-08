class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;

    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number;
    }

    chooseOperation(operation) {

    }


    compute() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innertext = this.currentOperand;

        
    }


    


    chooseOperation(operation) {}
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-allClear]');
const previousOperandTextElement = document.querySelector('[data-previousOperand]');
const currentOperandTextElement = document.querySelector('[data-currentOperand]');

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innertext)
            calculator.updateDisplay()
    })
})