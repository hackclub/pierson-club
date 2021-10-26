customElements.define('fb-thumb', class extends HTMLElement {
  constructor() {
    super();

    this.count = 0;

    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
          .target {
            display: flex;
            align-content: center;
            align-items: center;
            background: #7192d5;
            width: min-content;
            padding: 0.2em;
            border-radius: 0.5em;
            padding-right: 0.5em;
          }

          img {
            height: 2em;
            user-select: none;
            pointer-events: none;
          }

          span {
            color: white;
          }
      </style>
      <div class="target">
        <img class="thumb" src="https://cloud-50fwmj4rv-hack-club-bot.vercel.app/0thumb-icon-rgb-brc-site-300.svg"/>
        <span>${this.count}</span>
      </div>
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
    const target = this.shadowRoot.querySelector(".target");
    target.addEventListener("mousedown", () => {
      this.count++;
      target.querySelector("span").innerHTML = this.count;
    })
  }
  
})
