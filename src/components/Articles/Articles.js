import html from "./Articles.html";
import css from "./Articles.css";

class Articles extends HTMLElement {
    constructor() {
        super();

        this.setupShadow(this, html, css);
    }

    connectedCallback() {} 

    disconnectedCallback() {} 

    adoptedCallback() {}

    attributeChangeCallback(name, oldValue, newValue) {}

    setupShadow = (element, html, css) => {
        const shadow = element.attachShadow({ mode: "open" });
        const template = document.createElement("template");
        // applies global styles, local styles and html
        template.innerHTML = '<style>@import "styles.css";' + css + "</style>" + attachCallbacks(html, element);
        const templateContent = template.content;
        shadow.appendChild(templateContent.cloneNode(true));
    };

    attachCallbacks = (html, element) => {
        const lastId = Window.lastComponentId ? Window.lastComponentId : 0;
        const componentId = lastId + 1;
        Window.lastComponentId = componentId;
      
        const componentName = "component" + componentId;
        Window[componentName] = element;
        return html.replaceAll("this.", "Window." + componentName + ".");
    };
}

customElements.define('c-articles', Articles);