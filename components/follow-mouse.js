customElements.define('follow-mouse', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.x = !this.hasAttribute("x");
    this.y = !this.hasAttribute("y");
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          position: fixed;
          transform: translate(-50%, -50%);
        }
      </style>
      <div class="container">
        <slot></slot>
      </div>
    `

    document.body.addEventListener('mousemove', e => {
      const container = this.shadowRoot.querySelector(".container");
      if (this.x) container.style.top = `${e.clientY}px`;
      if (this.y) container.style.left = `${e.clientX}px`;
    })
  }
})

