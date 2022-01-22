export default class {
    // پارامتر همان پارامتری است که 
    // از یوآرال گرفته میشود
    // 
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        // بوسیله این متد میتوان به عنوان صفحه
        // دسترسی داشت و عنوان هر صفحه را 
        // نسبت به نیاز تغییر داد
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    /** Create shadow and merge html + css */
    setupShadow = (element, html, css) => {
    const shadow = element.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    // applies global styles, local styles and html
    template.innerHTML = '<style>@import "styles.css";' + css + "</style>" + attachCallbacks(html, element);
    const templateContent = template.content;
    shadow.appendChild(templateContent.cloneNode(true));
  };
  
  /** Saving global component reference to window and replacing this. in html with reference */
    attachCallbacks = (html, element) => {
    const lastId = Window.lastComponentId ? Window.lastComponentId : 0;
    const componentId = lastId + 1;
    Window.lastComponentId = componentId;
  
    const componentName = "component" + componentId;
    Window[componentName] = element;
    return html.replaceAll("this.", "Window." + componentName + ".");
  };
} 