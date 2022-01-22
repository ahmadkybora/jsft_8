// بوسیله متد زیر میتوان یک المن ساخت
const template = document.createElement('template');
// متد زیر
// html || xml
// یک عنصر را دریافت میکند
// insertAdjacentHTML()
// بمتد فوق برای جایگزینی است
template.innerHTML = `
    <style>
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-top: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }
        .user-card img {
            width 100%
        }
        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5ps;
            padding: 5px 10px;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
`;
// در کد فوق یک تگ اسلات وجود دارد
// این تگ از عناصر پیش ساخته در اچ تی ام ال است
// که بوسیله آن میتوانید یک درخت دام جداگانه ایجاد کنید

// بوسیله کلاس زیر میتوان مانند فریکورکها
// کامپوننت ساخت
class Posts extends HTMLElement {

    constructor() {
        super();

        this.showInfo = true;
        // یک درخت دام سایه را به عنصر مشخص شده متصل می کنه
        // طبق داک موزیلا به هر عنصر نمیتوان اتصال داد
        // به داک موزیلا مراجعه کنید
        this.attachShadow({ mode: 'open' });
        // رابط متد بالا با دام 
        // متد پایین است که گره میزند
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // appendChild
        // یک گره را به انتهای لیست فرزندان یک گره والد مشخص شده اضافه می کند.
        // اگر فرزند داده شده ارجاع به یک گره موجود در سند باشد،
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        // یک اسم به تگ بالا گره زدیم
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        // یک عکس به تگ بالا گره زدیم
        // بوسیله متد زیر میتوان اتریبیوت تنظیم کرد
        // بر روی یک کامپوننت
        this.innerHTML = this.getAttribute('name');
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');
        if(this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info')
                       .addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info')
                       .removeEventListener('click', () => this.toggleInfo());
    }
}

// این متد در اصل کلاس مورد نظر را گرفته و یک المنت 
// مانند اچ تی ام ال میسازد
// و شما میتوانید از ان مانند یک تگ اچ تی ام ال استفاده
// کنید
window.customElements.define("c-posts", Posts);

// بوسیله متد های جاوااسکریپت که در بالا وجود دارد میتوان یک المنت مانند المنتهای دیگر در اچ تی ام ال ساخت