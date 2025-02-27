const template = document.createElement('template')
template.innerHTML = `
<h1>BRUH</>
`
customElements.define("my-calculator", 
    class Calculator extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: "open"})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }
        connectedCallback () {

        }
    }
)
