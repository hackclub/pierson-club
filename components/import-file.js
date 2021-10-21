import marked from './marked.js';

customElements.define('import-file', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // view
    setContent(this.getAttribute("src"), this.shadowRoot);
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