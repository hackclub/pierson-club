import marked from './marked.js';

customElements.define('import-file', class extends HTMLElement {
  constructor() {
    super();
    if (this.hasAttribute("shadowRoot")) this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // view
    // this.innerHTML = "";
    setContent(this.getAttribute("src"), this.hasAttribute("shadowRoot") ? this.shadowRoot : this);
  }
})

function setInnerHTML(elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes)
      .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

async function setContent(url, container) {
  const response = await fetch(url);
  let text = await response.text();

  const l = url.split(".").length;
  const extension = url.split(".")[l-1];
  if (extension === "md") text = marked(text);

  setInnerHTML(container, text);
}