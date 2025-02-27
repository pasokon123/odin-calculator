const template = document.createElement('template')
template.innerHTML = `
<style>
    #wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 300px;
        font-size: 100px;
    }
</style>

<div id="wrapper">
    <div id="container"></div>
</div>
`
customElements.define("my-calculator", 
    class Calculator extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: "open"})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.container = this.shadowRoot.querySelector("#container")
        }
        connectedCallback () {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 5; j++) {
                    const button = document.createElement("div")
                    button.textContent = 1
                    this.container.appendChild(button)
                }
            }
        }
    }
)
