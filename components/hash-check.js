customElements.define('hash-check', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // view
    const setContent = () => {
      const route = window.location.hash.substring(2)
      const match = route === this.getAttribute("route")
      this.shadowRoot.innerHTML = match ? `<slot></slot>` : "";
    }

    window.addEventListener("hashchange", setContent);
    window.addEventListener("load", setContent);
  }
})