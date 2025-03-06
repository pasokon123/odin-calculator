const template = document.createElement('template')
template.innerHTML = `
<style>
    #wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    #numberButtons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 240px;
        font-size: 80px;
    }
    #actions {
        display: flex;
        flex-direction: column;
    }
    button, #display {
        font-size: 60px;
        height: 80px;
        width: 80px;
    }
</style>

<div id="wrapper">
    <div id="numberButtons"></div>
    <div id="actions">
        <button id="add">+</button>
        <button id="subtract">-</button>
        <button id="divide">/</button>
        <button id="multiply">*</button>
    </div>
    <button id="equals">=</button>
    <div id="display"></div>
</div>
`
customElements.define("my-calculator", 
    class Calculator extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: "open"})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.numberButtons = this.shadowRoot.querySelector("#numberButtons")
            this.additionButton = this.shadowRoot.querySelector("#add")
            this.subtractionButton = this.shadowRoot.querySelector("#subtract")
            this.divideButton = this.shadowRoot.querySelector("#divide")
            this.multiplyButton = this.shadowRoot.querySelector("#multiply") 
            this.equalsButton = this.shadowRoot.querySelector("#equals")
            this.display = this.shadowRoot.querySelector("#display")
          
            this.firstNumber = 0
            this.secondNumber = 0
        }
        connectedCallback () {
            for (let i = 9; i > -1; i--) {
                const button = document.createElement("button")
                button.setAttribute("id", `number${i}`)
                button.textContent = i
                this.numberButtons.appendChild(button)
                button.addEventListener("click", event => {
                    if (!this.action && !this.firstNumber) {
                        this.firstNumber = button.textContent
                        this.display.textContent = this.firstNumber
                    } else if (!this.action) {
                        this.firstNumber += button.textContent
                        this.display.textContent = this.firstNumber
                    } else if (!this.secondNumber){
                        this.secondNumber = button.textContent
                        this.display.textContent = this.secondNumber
                    } else {
                        this.secondNumber += button.textContent
                        this.display.textContent = this.secondNumber
                    }
                })
            }
            this.numberZero = this.shadowRoot.querySelector("#number0")
            this.numberOne = this.shadowRoot.querySelector("#number1")
            this.numberTwo = this.shadowRoot.querySelector("#number2")
            this.numberThree = this.shadowRoot.querySelector("#number3")
            this.numberFour = this.shadowRoot.querySelector("#number4")
            this.numberFive = this.shadowRoot.querySelector("#number5")
            this.numberSix = this.shadowRoot.querySelector("#number6")
            this.numberSeven = this.shadowRoot.querySelector("#number7")
            this.numberEight = this.shadowRoot.querySelector("#number8")
            this.numberNine = this.shadowRoot.querySelector("#number9")

            this.additionButton.addEventListener("click", event => {
                if (this.firstNumber) {
                    this.action = "+"
                    this.display.textContent = "+"
                }
            })
            this.subtractionButton.addEventListener("click", event => {
                if (this.firstNumber) {
                    this.action = "-"
                    this.display.textContent = "-"
                }
            })
            this.divideButton.addEventListener("click", event => {
                if (this.firstNumber) {
                    this.action = "/"
                    this.display.textContent = "/"
                }
            })
            this.multiplyButton.addEventListener("click", event => {
                if (this.firstNumber) {
                    this.action = "*"
                    this.display.textContent = "*"
                }
            })
            this.equalsButton.addEventListener("click", event => {
                if (this.firstNumber && this.secondNumber) {
                    this.firstNumber = Number(this.firstNumber)
                    this.secondNumber = Number(this.secondNumber)
                    this.display.textContent = this.calculate()
                    this.currentNumber = this.display.textContent
                }
            })
        }
        calculate () {
            if (this.action === "+") {
                return this.add(this.firstNumber, this.secondNumber)
            } else if (this.action === "-") {
                return this.subtract(this.firstNumber, this.secondNumber)
            } else if (this.action === "/") {
                return this.divide(this.firstNumber, this.secondNumber)
            } else if (this.action === "*") {
                return this.multiply(this.firstNumber, this.secondNumber)
            }
        }
        add (first, second) {
            return first + second
        }
        multiply (first, second) {
            return first * second
        }
        subtract (first, second) {
            return first - second
        }
        divide (first, second) {
            return first / second
        }
  
    }
)
