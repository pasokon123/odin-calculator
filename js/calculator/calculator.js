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
        width: 300px;
        font-size: 100px;
    }
    #actions {
        display: flex;
        flex-direction: column;
    }
    button {
        font-size: 80px;
        height: 100px;
        width: 100px;
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
    <div id="display">display</div>
</div>
`
customElements.define("my-calculator", 
    class Calculator extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: "open"})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.numberButtons = this.shadowRoot.querySelector("#numberButtons")
            this.display = this.shadowRoot.querySelector("#display")

            this.currentValue = 0
            this.newValue = 0
        }
        connectedCallback () {
            for (let i = 9; i > -1; i--) {
                const button = document.createElement("button")
                button.setAttribute("id", `number${i}`)
                button.textContent = i
                this.numberButtons.appendChild(button)
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
