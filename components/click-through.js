customElements.define('click-through', class extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });

    // state
    this.index = 1;
    this.total = this.children.length;
  }

  connectedCallback() {
    // view
    this.innerHTML = `
      <style>
        .hide {
          display: none;
        }
      </style>
      <div id="target"><slot></slot></div>
    `

    // init
    for (let i = 1; i < this.children.length; i++) {      
      this.children[i].style.display = "none";
    }

    // events
    this.addEventListener('click', e => {
      const kids = this.children;
        
      for (let i = 0; i < kids.length; i++) {
        if (i === this.index) kids[i].style.display = "block";
        else kids[i].style.display = "none";
      } 

      this.index = (this.index+1) % this.total;
    })
  }
  
})