class Users extends HTMLElement {
    constructor() {
        super();

        this.setupShadow();
    }

    connectedCallback() {} 

    disconnectedCallback() {} 

    adoptedCallback() {}

    attributeChangeCallback(name, oldValue, newValue) {}

    setupShadow() {
        this.shadow = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('c-users-template').content;
        shadow.appendChild(template.cloneNode(true));
    }
}

customElements.define('c-users', Users);