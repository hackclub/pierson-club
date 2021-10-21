customElements.define('wc-blink', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template')
    template.innerHTML = `
    <style>
      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
      :host(*) {
        animation: blink-animation ${this.rate} steps(5, start) infinite;
      }
    </style>
    ${this.innerHTML}
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  
  get rate() {
    return this.getAttribute('rate') || '1s';
  }
})
